import React, { useState } from "react";

const ToDoItem = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow">
      <div
        className={`flex-1 ${task.completed ? "line-through text-gray-500" : ""}`}
      >
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="p-1 border rounded w-full"
          />
        ) : (
          <span>{task.text}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => toggleTaskCompletion(task.id)}
          className={`px-2 py-1 rounded ${
            task.completed
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={handleEdit}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
