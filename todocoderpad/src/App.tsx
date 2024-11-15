import React, { useCallback, useState, useEffect, useMemo } from "react";
import { v4 as uuid } from "uuid";
import styled from "@emotion/styled";
import { AddInput } from "./components/AddInput";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";

interface Todo {
  id: string;
  label: string;
  checked: boolean;
  created_at: string;
  completed_at?: string | null;
}

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
const initialData: Todo[] = [
  {
    id: uuid(),
    label: "Buy groceries",
    checked: false,
    created_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    label: "Reboot computer",
    checked: false,
    created_at: new Date().toISOString(),
  },
  {
    id: uuid(),
    label: "Ace CoderPad interview",
    checked: true,
    created_at: new Date().toISOString(),
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialData);

  const addTodo = useCallback((label: string) => {
    setTodos((prev) => [
      {
        id: uuid(),
        label,
        checked: false,
        created_at: new Date().toISOString(),
      },
      ...prev,
    ]);
  }, []);

  //requirement 1
  const handleChange = useCallback((id: string ,checked: boolean) => {
    // handle the check/uncheck logic
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, checked, completed_at: checked ? new Date().toISOString() : null }
          : todo
      )
    );
  }, []);

  //requirement 2
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  //requirement 3
  const sortedTodos = useMemo(() => {
    const activeTodos = todos
      .filter((todo) => !todo.checked)
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  
    const completedTodos = todos
      .filter((todo) => todo.checked)
      .sort((a, b) => new Date(a.completed_at).getTime() - new Date(b.completed_at).getTime());
  
    return [...activeTodos, ...completedTodos];
  }, [todos]);

  const handleDelete = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <Wrapper>
      <Header>Todo List</Header>
      <AddInput onAdd={addTodo} />
      <TodoList>
      {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onChange={(checked) => handleChange(todo.id, checked)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </TodoList>
    </Wrapper>
  );
}

export default App;
