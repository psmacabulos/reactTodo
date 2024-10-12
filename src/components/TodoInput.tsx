import React, { useEffect } from "react";
import { useState } from "react";
import { ToDo } from "../App";
import { v4 as uuidv4 } from "uuid";

import { ToDoInputProps } from "../App";

const TodoInput: React.FC<ToDoInputProps> = ({ onAddToDo, currentToDo }) => {
  const [toDoItem, setToDoItem] = useState<ToDo>({ id: "", text: "" });

  useEffect(() => {
    if (currentToDo) setToDoItem(currentToDo);
  }, [currentToDo]);

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
      <button onClick={handleClick}>{currentToDo ? "Finish editing" : "Add to do"}</button>
    </header>
  );
};

export default TodoInput;
