import React from "react";
import { ITodo } from "../../types/todo.types";
import TodoItem from "./TodoItem/TodoItem";
import s from './todoList.module.css'

interface ITodoList {
  todoList: ITodo[] | undefined;
}

const TodoList = ({ todoList }: ITodoList) => {
  return (
    <div className={s.todoList}>
      {todoList?.map((todoElement) => (<TodoItem key={todoElement.id} todoElement={todoElement}/>))}
    </div>
  );
};



export default TodoList;
