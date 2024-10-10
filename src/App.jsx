import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [toDos, setToDos] = useState([]);

  const handleAddToDo = (newToDo) => {
    setToDos([...toDos, newToDo]);
  };
  return (
    <>
      <TodoInput onAddToDo={handleAddToDo} />
      <TodoList toDos={toDos} />
    </>
  );
}

export default App;
