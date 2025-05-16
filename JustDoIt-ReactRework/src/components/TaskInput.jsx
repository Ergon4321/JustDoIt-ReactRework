import React, { useState } from 'react';

const TaskInput = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('work');
    const [priority, setPriority] = useState('medium');

    const handleAdd = () => {
        if (title.trim()) {
            const newTask = { title, description, category, priority };
            onAdd(newTask);
            setTitle('');
            setDescription('');
            setCategory('work');
            setPriority('medium');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="work">Work</option>
                <option value="home">Home</option>
                <option value="sport">Sport</option>
                <option value="personal">Personal</option>
            </select>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default TaskInput;
