import React, { useEffect } from "react";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export interface ToDo {
  id: string;
  text: string;
}

interface ToDoInputProps {
  onAddToDo: (id: number) => void;
}

export interface ToDoListProps {
  toDos: ToDo[];
  onRemoveToDo: (id: number) => void;
}

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  useEffect(() => {
    console.log("Updated toDos:", JSON.stringify(toDos));
  }, [toDos]);
  const handleAddToDo = (newToDo: ToDo) => {
    setToDos([...toDos, newToDo]);
  };

  // create a function to delete the  toDoItem
  const handleRemoveToDo = (id: number) => {
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
