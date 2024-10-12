import React from "react";
import TodoCard from "./TodoCard";
import { ToDoListProps } from "../App";

const TodoList: React.FC<ToDoListProps> = ({ toDos, onRemoveToDo, onEditToDo, editingToDoId }) => {
  return (
    <ul className="main">
      {toDos.map((toDo, index) => (
        <TodoCard
          key={index}
          toDo={toDo}
          index={index}
          onRemoveToDo={onRemoveToDo}
          onEditToDo={onEditToDo}
          isEditing={editingToDoId === toDo.id}
        >
          <p>{toDo.text}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
