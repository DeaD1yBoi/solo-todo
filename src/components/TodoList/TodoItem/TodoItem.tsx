import React, { useState } from "react";
import { ITodo } from "../../../types/todo.types";
import { MdDone, MdEdit, MdDelete } from "react-icons/md";
import {
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} from "../../../api/todo.api";
import EditMode from "./EditMode/EditMode";
import s from "./todoItem.module.css";
import { Draggable } from "react-beautiful-dnd";

interface ITodoElement {
  todoElement: ITodo;
  index: number;
}

const TodoItem = ({ todoElement, index }: ITodoElement) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const [editMode, setEditMode] = useState(false);
  const [updateTodos] = useUpdateTodosMutation();
  const [deleteTodods] = useDeleteTodosMutation();

  return (
    <Draggable draggableId={todoElement.id.toString()} index={index}>
      {(provided) => (
        <form
          onSubmit={submitHandler}
          className={s.todoItem}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {editMode ? (
            <EditMode
              todoElement={todoElement}
              setEditMode={setEditMode}
              updateTodos={updateTodos}
              edit={editMode}
            />
          ) : (
            <div>
              <span className={s.todoItemText}>{todoElement.name}</span>
              <MdDone
                className={s.icon}
                onClick={() =>
                  updateTodos({ ...todoElement, isDone: !todoElement.isDone })
                }
              />
              <MdEdit
                className={s.icon}
                onClick={() => setEditMode(!editMode)}
              />
              <MdDelete
                className={s.icon}
                onClick={() => deleteTodods(todoElement)}
              />
            </div>
          )}
        </form>
      )}
    </Draggable>
  );
};

export default TodoItem;
