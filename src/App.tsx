import React, { useState } from "react";
import s from "./App.module.css";
import Header from "./components/header/Header";
import InputField from "./components/inputField/InputField";
import { ITodo } from "./types/todo.types";
import TodoList from "./components/TodoList/TodoList";
import { useGetTodosQuery } from "./api/api";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDeleteTodosMutation, useUpdateTodosMutation } from "./api/todo.api";

function App() {
  const { isLoading, data } = useGetTodosQuery(null);
  const [updateTodos] = useUpdateTodosMutation();
  const [deleteTodods] = useDeleteTodosMutation();


  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    console.log(result);
    const item = data?.find((todoElement) => todoElement.id === +draggableId);
    if (!destination) {
      deleteTodods(item!);
    }
    else if (destination?.droppableId !== source.droppableId) {
      updateTodos({ ...item!, isDone: !item!.isDone });
    }
    else return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={s.App}>
        <Header />
        <InputField />
        <TodoList todoList={data} />
      </div>
    </DragDropContext>
  );
}

export default App;
