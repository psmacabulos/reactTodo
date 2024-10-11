import TodoCard from "./TodoCard";

const TodoList = ({ toDos, onRemoveToDo }) => {
  return (
    <ul className="main">
      {toDos.map((toDo, index) => (
        <TodoCard key={index} index={index} onRemoveToDo={onRemoveToDo}>
          <p>{toDo}</p>
        </TodoCard>
      ))}
    </ul>
  );
};

export default TodoList;
