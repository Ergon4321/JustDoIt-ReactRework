import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, updateTaskOrder }) => {
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (index) => {
        setDraggedItem(index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (index) => {
        if (draggedItem === null) return;

        const updatedTasks = [...tasks];
        const [removed] = updatedTasks.splice(draggedItem, 1);
        updatedTasks.splice(index, 0, removed);

        updateTaskOrder(updatedTasks);
        setDraggedItem(null); // Resetujemy przeciągany element
    };

    return (
        <ul>
            {tasks.map((task, index) => (
                <li
                    key={task.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}
                    className="task-item"
                >
                    <Task task={task} onDelete={() => onDelete(task.id)} />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
