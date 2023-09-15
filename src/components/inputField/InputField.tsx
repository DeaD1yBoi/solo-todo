import React, { FormEvent } from "react";
import { useAction } from "../../hooks/useAction";
import { useAddTodosMutation } from "../../api/todo.api";
import { ITodo, ITodoData } from "../../types/todo.types";
import s from './inputField.module.css'

const InputField = () => {
  const [todo, setTodo] = React.useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodos({ name: todo, isDone: false });
    setTodo("");
  };
  const [addTodos] = useAddTodosMutation();
  return (
    <div>
      <form className={s.input} onSubmit={handleSubmit}>
        <input className={s.input__box} value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button className={s.button} type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputField;
