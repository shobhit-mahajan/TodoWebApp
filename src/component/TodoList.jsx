import React from "react";
import ToDoItem from "./TodoItem";

const ToDoList = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => (
  <ul className="space-y-2">
    {tasks.map((task) => (
      <ToDoItem
        key={task.id}
        task={task}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ))}
  </ul>
);

export default ToDoList;
