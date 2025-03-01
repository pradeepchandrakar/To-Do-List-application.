import { useState } from "react";

function ToDoItem({ todo, onToggle, onEdit, onDelete }) {
  // ✅ Always call useState at the top
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo?.text || "");

  // ✅ Check for undefined todo inside return, NOT before hooks
  if (!todo) return <div>Loading...</div>; 

  function handleEdit() {
    if (newText.trim() === "") return; 
    onEdit(todo.id, newText);
    setIsEditing(false);
  }

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
      <div className="flex items-center space-x-3">
        <input 
          type="checkbox" 
          checked={todo?.completed || false}  
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-blue-500"
        />
        {isEditing ? (
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded"
          />
        ) : (
          <span className={`text-lg ${todo?.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
            {todo?.text || "No Task"}
          </span>
        )}
      </div>

      <div className="space-x-2">
        {isEditing ? (
          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
            onClick={handleEdit}>
            ✅ Save
          </button>
        ) : (
          <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
            onClick={() => setIsEditing(true)}>
            ✏️ Edit
          </button>
        )}
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          onClick={() => onDelete(todo.id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
