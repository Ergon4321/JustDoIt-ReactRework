import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <li>
      {task.text} 
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Task;