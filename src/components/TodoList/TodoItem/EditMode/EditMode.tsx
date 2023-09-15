import React, { useState } from "react";
import { ITodo } from "../../../../types/todo.types";
import { MdDone, MdDelete } from "react-icons/md";
import s from '../todoItem.module.css'
interface EditModeProps {
  todoElement: ITodo;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  updateTodos: (todo: ITodo) => void;
}

const EditMode = ({ todoElement, setEditMode, updateTodos }: EditModeProps) => {
  const [editTodoValue = todoElement.name, setEditTodoValue] = useState(todoElement.name);
  const doneHandler = () => {
    setEditMode(false);
    !editTodoValue
    ? updateTodos({ ...todoElement, name: 'nothing' })
    : updateTodos({ ...todoElement, name: editTodoValue });
  };
  return (
    <div>
      <input className={s.editInput} value={editTodoValue} onChange={(e) => setEditTodoValue(e.target.value)}/>
      <MdDone className={s.icon} onClick={doneHandler} />
      <MdDelete className={s.icon} onClick={()=>setEditTodoValue('')}/>
    </div>
  );
};

export default EditMode;
