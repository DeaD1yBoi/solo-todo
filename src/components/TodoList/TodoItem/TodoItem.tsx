import React, { useState } from "react";
import { ITodo } from "../../../types/todo.types";
import { MdDone, MdEdit, MdDelete } from "react-icons/md";
import {
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} from "../../../api/todo.api";
import EditMode from "./EditMode/EditMode";
import s from "./todoItem.module.css";

interface ITodoElement {
  todoElement: ITodo;
}

const TodoItem = ({ todoElement }: ITodoElement) => {
  const [editMode, setEditMode] = useState(false);
  const [updateTodos] = useUpdateTodosMutation();
  const [deleteTodods] = useDeleteTodosMutation();
  return (
    <form className={s.todoItem}>
      {editMode ? (
        <EditMode
          todoElement={todoElement}
          setEditMode={setEditMode}
          updateTodos={updateTodos}
        />
      ) : (
        <div>
          {todoElement.isDone ? (
            <s className={s.todoItemText}>{todoElement.name}</s>
          ) : (
            <span className={s.todoItemText}>{todoElement.name}</span>
          )}
          <MdDone
            className={s.icon}
            onClick={() =>
              updateTodos({ ...todoElement, isDone: !todoElement.isDone })
            }
          />
          <MdEdit className={s.icon} onClick={() => setEditMode(!editMode)} />
          <MdDelete
            className={s.icon}
            onClick={() => deleteTodods(todoElement)}
          />
        </div>
      )}
    </form>
  );
};

export default TodoItem;
