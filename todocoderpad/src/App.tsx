import React, { useCallback, useEffect, useMemo, useState } from "react";
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
// const initialData: Todo[] = [
//   {
//     id: uuid(),
//     label: "Buy groceries",
//     checked: false,
//   },
//   {
//     id: uuid(),
//     label: "Reboot computer",
//     checked: false,
//   },
//   {
//     id: uuid(),
//     label: "Ace CoderPad interview",
//     checked: true,
//   },
// ];

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((label: string) => {
    setTodos((prev) => [
      {
        id: uuid(),
        label,
        checked: false,
      },
      ...prev,
    ]);
  }, []);

  const handleChange = useCallback((id: string, checked: boolean) => {
    // handle the check/uncheck logic
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked };
        }
        return todo;
      });
    });
  }, []);

  // TODO: Load todos from local storage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // TODO: Save todos to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // TODO: Sort todos by checked status
  const sortedTodos = useMemo(() => {
    return todos.sort((a, b) => a.checked ? 1 : -1);
  }, [todos]);

  return (
    <Wrapper>
      <Header>Todo List</Header>
      <AddInput onAdd={addTodo} />
      <TodoList>
        {sortedTodos.map((todo) => (
          <TodoItem {...todo} onChange={handleChange} />
        ))}
      </TodoList>
    </Wrapper>
  );
}

export default App;
