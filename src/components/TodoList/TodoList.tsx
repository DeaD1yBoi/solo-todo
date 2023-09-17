import React, { useState } from "react";
import { ITodo } from "../../types/todo.types";
import TodoItem from "./TodoItem/TodoItem";
import s from "./todoList.module.css";
import { Droppable } from "react-beautiful-dnd";

interface ITodoList {
  todoList: ITodo[] | undefined;
}
const TodoList = ({ todoList }: ITodoList) => {
  const ActiveList = todoList?.filter((todoElement) => !todoElement.isDone);
  const CompleteList = todoList?.filter((todoElement) => todoElement.isDone);
  return (
    <div className={s.container}>
      <Droppable droppableId="ActiveList">
        {(provided) => (
          <div
            className={s.list}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className={s.heading}>Active Tasks</span>
            {ActiveList?.map((todoElement, index) => (
              <TodoItem
                key={todoElement.id}
                index={index}
                todoElement={todoElement}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="CompleteList">
        {(provided) => (
          <div
            className={`${s.list} ${s.complete}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className={s.heading}>Completed Tasks</span>
            {CompleteList?.map((todoElement, index) => (
              <TodoItem
                key={todoElement.id}
                index={index}
                todoElement={todoElement}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
