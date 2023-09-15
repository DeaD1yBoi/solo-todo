import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../types/todo.types";
import { useState } from "react";

const initialState: ITodo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodos: (state, { payload: todo }: PayloadAction<string>) => {
      // setTodoList([...todoList, {id: Date.now(), name: todo, isDone: false}])
    },
  },
});

export const { reducer, actions } = todoSlice;
