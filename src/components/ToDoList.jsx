
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onToggle, onEdit, onDelete }) {
  return (
    <div className="w-full max-w-md space-y-3">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ToDoList;
