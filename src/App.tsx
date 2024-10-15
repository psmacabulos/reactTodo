import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

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
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [currentToDo, setCurrentToDo] = useState<ToDo | null>(null);

  // Load todos from local storage when the app initializes
  useEffect(() => {
    if (localStorage) {
      const storedToDos = localStorage.getItem("toDos");
      if (storedToDos) {
        setToDos(JSON.parse(storedToDos));
      }
    }
  }, []);

  const handleAddToDo = (newToDo: ToDo) => {
    let updatedTodo;
    if (currentToDo) {
      updatedTodo = toDos.map((todo) => (todo.id === currentToDo.id ? newToDo : todo));
      setCurrentToDo(null);
    } else {
      updatedTodo = [...toDos, newToDo];
    }
    setToDos(updatedTodo);
    localStorage.setItem("toDos", JSON.stringify(updatedTodo));
  };

  const handleEditToDo = (todo: ToDo) => {
    setCurrentToDo(todo);
  };

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
