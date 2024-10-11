import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [toDos, setToDos] = useState([]);

  const handleAddToDo = (newToDo) => {
    setToDos([...toDos, newToDo]);
  };

  // create a function to delete the  toDoItem
  const handleRemoveToDo = (id) => {
    const newToDos = toDos.filter((todo, index) => id !== index);
    setToDos(newToDos);
  };

  return (
    <>
      <TodoInput onAddToDo={handleAddToDo} />
      <TodoList toDos={toDos} onRemoveToDo={handleRemoveToDo} />
    </>
  );
}

export default App;
