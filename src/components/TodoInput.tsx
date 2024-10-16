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
    if (toDoItem.text === "") {
      alert("please write your task");
      return;
    }

    const newTodo = { ...toDoItem, id: uuidv4() };
    onAddToDo(newTodo);
    setToDoItem({ id: "", text: "" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <header>
      <h1>My React To Do App</h1>
      <div className="inputArea">
        <input
          placeholder="What is your task?"
          value={toDoItem.text}
          onChange={(e) => setToDoItem({ ...toDoItem, text: e.target.value })}
          onKeyDown={handleKeyDown}
        ></input>
        <button onClick={handleClick}>{currentToDo ? "Edit" : "Add"}</button>
      </div>
    </header>
  );
};

export default TodoInput;
