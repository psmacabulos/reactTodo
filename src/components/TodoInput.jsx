import { useState } from "react";
const TodoInput = ({ onAddToDo }) => {
  const [toDoItem, setToDoItem] = useState("");
  const handleClick = () => {
    onAddToDo(toDoItem);
    setToDoItem("");
  };
  return (
    <header>
      <input
        placeholder="What is your task today?"
        value={toDoItem}
        onChange={(e) => setToDoItem(e.target.value)}
      ></input>
      <button onClick={handleClick}>Add to do</button>
    </header>
  );
};

export default TodoInput;
