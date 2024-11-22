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

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((label: string) => {
    setTodos((prev) => [
      {
        id: uuid(),
        label,
        checked: false,
        created_at: new Date(),
        completed_at: null,
      },
      ...prev,
    ]);
  }, []);

  const handleChange = useCallback((id: string, checked: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked, completed_at: checked ? new Date() : null };
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
    // TODO: Sort by checked status, then by created_at
    return todos.sort((a, b) => (a.checked ? 1 : -1) || a.created_at.getTime() - b.created_at.getTime());
  }, [todos]);

  // TODO: Handle delete
  const handleDelete = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <Wrapper>
      <Header>Todo List</Header>
      <AddInput onAdd={addTodo} />
      <TodoList>
        {sortedTodos.map((todo) => (
          <TodoItem {...todo} onChange={handleChange} onDelete={handleDelete} key={todo.id} />
        ))}
      </TodoList>
    </Wrapper>
  );
}

export default App;
