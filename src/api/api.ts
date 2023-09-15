import { ITodo } from "../types/todo.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4100/todos";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], null>({
      query: () => `/`,
      providesTags: () => [{ type: "Todos" }],
    }),
  }),
});

export const { useGetTodosQuery } = api;
