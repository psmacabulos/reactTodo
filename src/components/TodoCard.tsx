import React from "react";

interface ToDoCardProps {
  index: number;
  onRemoveToDo: (id: number) => void;
  children: React.ReactNode;
}

const TodoCard: React.FC<ToDoCardProps> = ({ children, index, onRemoveToDo }) => {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square"></i>
        <button>
          <i onClick={() => onRemoveToDo(index)} className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
