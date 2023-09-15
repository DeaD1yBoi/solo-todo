import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as todoReducer } from "./todos/todo.slice";
import { useState } from "react";
import { ITodo } from "../types/todo.types";
import { api } from "../api/api";
const reducers = combineReducers({
  todos: todoReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
