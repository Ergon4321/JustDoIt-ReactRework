import React, { useState } from 'react';

const TaskInput = ({ onAdd }) => {
    const [newTask, setNewTask] = useState('');

    const handleAdd = () => {
        if (newTask.trim()) {
            onAdd(newTask);
            setNewTask('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default TaskInput;