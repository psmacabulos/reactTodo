import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ toDos }) => {
  return (
    <ul className="main">
      {toDos.map((toDo, index) => (
        <TodoCard key={index}>
          <p>{toDo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
