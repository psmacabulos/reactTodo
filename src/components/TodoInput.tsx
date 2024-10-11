import React from "react";
import { useState } from "react";
import { ToDo } from "../App";
import { v4 as uuidv4 } from "uuid";

interface TodoInputProps {
  onAddToDo: (todo: ToDo) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddToDo }) => {
  const [toDoItem, setToDoItem] = useState<ToDo>({ id: "", text: "" });
  const handleClick = () => {
    const newTodo = { ...toDoItem, id: uuidv4() };
    onAddToDo(newTodo);
    setToDoItem({ id: "", text: "" });
  };
  return (
    <header>
      <input
        placeholder="What is your task today?"
        value={toDoItem.text}
        onChange={(e) => setToDoItem({ ...toDoItem, text: e.target.value })}
      ></input>
      <button onClick={handleClick}>Add to do</button>
    </header>
  );
};

export default TodoInput;
