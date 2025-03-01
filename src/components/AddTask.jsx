import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  }

  return (
    <div className="flex w-full max-w-md mb-5">
      <input 
        type="text" 
        placeholder="Enter task..." 
        className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button 
        className="bg-blue-500 text-white px-5 py-2 rounded-r-lg font-semibold hover:bg-blue-600 transition"
        onClick={handleAdd}>
        ➕ Add
      </button>
    </div>
  );
}

export default AddTask;
