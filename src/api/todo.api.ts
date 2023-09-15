import { ITodo, ITodoData } from "../types/todo.types";
import { api } from "./api";

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addTodos: builder.mutation<null, ITodoData>({
      query: (todo) => ({
        url: `/`,
        method: "POST",
        body: todo,
      }),
      invalidatesTags: () => [
        {
          type: "Todos",
        },
      ],
    }),


    updateTodos: builder.mutation<null, ITodo>({
      query: (todo) => ({
        url: `/${todo.id}`,
        body: todo,
        method: "PATCH",
      }),
      invalidatesTags: () => [{ type: "Todos"}],
    }),

    deleteTodos: builder.mutation<null, ITodo>({
      query: (todo) => ({
        url: `/${todo.id}`,
        body: todo,
        method: "DELETE",
      }),
      invalidatesTags: () => [{ type: "Todos"}],
    }),

  }),
});

export const { useAddTodosMutation, useUpdateTodosMutation, useDeleteTodosMutation } = todoApi;
