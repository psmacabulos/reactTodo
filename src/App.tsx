import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { todo } from "node:test";

export interface ToDo {
  id: string;
  text: string;
}

export interface ToDoInputProps {
  onAddToDo: (newToDo: ToDo) => void;
  currentToDo: ToDo | null;
}

export interface ToDoListProps {
  toDos: ToDo[];
  onRemoveToDo: (id: number) => void;
  onEditToDo: (todo: ToDo) => void;
  editingToDoId: string | null;
}

function App() {
  //Define the state variables
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [currentToDo, setCurrentToDo] = useState<ToDo | null>(null);

  const handleAddToDo = (newToDo: ToDo) => {
    if (currentToDo) {
      setToDos(toDos.map((todo) => (todo.id === currentToDo.id ? newToDo : todo)));
      setCurrentToDo(null);
    } else {
      setToDos([...toDos, newToDo]);
    }
  };

  const handleEditToDo = (todo: ToDo) => {
    setCurrentToDo(todo);
  };

  // create a function to delete the  toDoItem
  const handleRemoveToDo = (id: number) => {
    const newToDos = toDos.filter((todo, index) => id !== index);
    setToDos(newToDos);
  };

  return (
    <>
      <TodoInput onAddToDo={handleAddToDo} currentToDo={currentToDo} />
      <TodoList
        toDos={toDos}
        onRemoveToDo={handleRemoveToDo}
        onEditToDo={handleEditToDo}
        editingToDoId={currentToDo ? currentToDo.id : null}
      />
    </>
  );
}

export default App;
