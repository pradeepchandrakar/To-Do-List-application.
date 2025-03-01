import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import AddTask from "./components/AddTask";

function App() {
  const [todos, setTodos] = useState([]);

  // ✅ Add Task
  function addTodo(taskText) {
    const newTodo = { id: Date.now(), text: taskText, completed: false };
    setTodos([...todos, newTodo]);
  }

  // ✅ Toggle Complete
  function toggleTodo(id) {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  // ✅ Edit Task
  function editTodo(id, newText) {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  }

  // ✅ Delete Task
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <Header />
      <AddTask onAdd={addTodo} />
      <ToDoList todos={todos} onToggle={toggleTodo} onEdit={editTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;


