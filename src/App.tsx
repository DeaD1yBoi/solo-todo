import React, { useState } from "react";
import s from "./App.module.css";
import Header from "./components/header/Header";
import InputField from "./components/inputField/InputField";
import { ITodo } from "./types/todo.types";
import TodoList from "./components/TodoList/TodoList";
import { useGetTodosQuery } from "./api/api";

function App() {
  const { isLoading, data } = useGetTodosQuery(null);

  return (
    <div className={s.App}>
      <Header />
      <InputField />
      <TodoList todoList={data} />
    </div>
  );
}

export default App;
