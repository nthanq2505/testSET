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

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((label: string) => {
    setTodos((prev) => [
      {
        id: uuid(),
        label,
        checked: false,
        created_at: Date.now(),
        completed_at: null,
      },
      ...prev,
    ]);
  }, []);

  const handleChange = useCallback((id: string, checked: boolean) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checked,
              completed_at: checked ? Date.now() : null,
            }
          : todo
      )
    );
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const sortedTodos = useMemo(() => {
    const activeTodos = todos
      .filter((todo) => !todo.checked)
      .sort((a, b) => b.created_at - a.created_at);

    const completedTodos = todos
      .filter((todo) => todo.checked)
      .sort((a, b) => (a.completed_at || 0) - (b.completed_at || 0));

    return [...activeTodos, ...completedTodos];
  }, [todos]);

  return (
    <Wrapper>
      <Header>Todo List</Header>
      <AddInput onAdd={addTodo} />
      <TodoList>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))}
      </TodoList>
    </Wrapper>
  );
}

export default App;
