import React from "react";
import { ToDo } from "../App";

interface ToDoCardProps {
  index: number;
  toDo: ToDo;
  onRemoveToDo: (id: number) => void;
  onEditToDo: (todo: ToDo) => void;
  children: React.ReactNode;
  isEditing: boolean;
}

const TodoCard: React.FC<ToDoCardProps> = ({
  children,
  index,
  onRemoveToDo,
  onEditToDo,
  toDo,
  isEditing,
}) => {
  return (
    <li className={`todoItem ${isEditing && "editMode"}`}>
      {children}
      <div className="actionsContainer ">
        <button onClick={() => onEditToDo(toDo)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => onRemoveToDo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
