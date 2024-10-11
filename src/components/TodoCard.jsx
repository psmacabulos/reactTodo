const TodoCard = ({ children, index, onRemoveToDo }) => {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square"></i>
        <button>
          <i onClick={() => onRemoveToDo(index)} className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
