import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "@emotion/styled";
import { AddInput } from "./components/AddInput";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 300,
});

/**
 * This is the initial todo state.
 * Instead of loading this data on every reload,
 * we should save the todo state to local storage,
 * and restore on page load. This will give us
 * persistent storage.
 */
const initialData: Todo[] = [];

const filterAndSortTodos = (todos: Todo[]) => {
  return todos
    .sort((a, b) => {
      if (a.checked && b.checked) {
        return new Date(a.completed_at!).getTime() - new Date(b.completed_at!).getTime();
      } else if (!a.checked && !b.checked) {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      } else {
        return a.checked ? 1 : -1;
      }
    });
};

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialData;
  });

  const addTodo = useCallback((label: string) => {
    setTodos((prev) => {
      const newTodo = {
        id: uuid(),
        label,
        checked: false,
        created_at: new Date().toISOString(),
        completed_at: null
      };
      const newTodos = filterAndSortTodos([...prev, newTodo]);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => {
      const updatedTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }, []);

  const handleChange = useCallback((checked: boolean, id: string) => {
    // handle the check/uncheck logic
    setTodos((prev) => {
      const updatedTodos = prev
        .map((todo) => {
          if (todo.id === id) {
            return { 
              ...todo, 
              checked, 
              completed_at: checked ? new Date().toISOString() : null 
            };
          }
          return todo;
        });
      const sortedTodos = filterAndSortTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(sortedTodos));
      return sortedTodos;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Wrapper>
      <Header>Todo List</Header>
      <AddInput onAdd={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            onChange={handleChange}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>
    </Wrapper>
  );
}

export default App;
