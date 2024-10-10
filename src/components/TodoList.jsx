import React from "react";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const toDo = ["Mop the floor", "Buy groceries", "Prepare for exams"];

  return (
    <ul className="main">
      {toDo.map((toDo, index) => (
        <TodoCard key={index}>
          <p>{toDo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
