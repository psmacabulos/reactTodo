import React from "react";
import TodoCard from "./TodoCard";
import { ToDoListProps } from "../App";

const TodoList: React.FC<ToDoListProps> = ({ toDos, onRemoveToDo }) => {
  return (
    <ul className="main">
      {toDos.map((toDo, index) => (
        <TodoCard key={index} index={index} onRemoveToDo={onRemoveToDo}>
          <p>{toDo.text}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
