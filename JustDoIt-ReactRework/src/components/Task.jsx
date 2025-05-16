import React from 'react';

const Task = ({ task, onDelete }) => {
    return (
        <>
            <div className='task-category'>
                <p>{task.category}</p>
            </div>
            <div className="task-content">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <div className='task-priority'><p>{task.priority}</p></div>
            <div className='task-buttons'>
                <button className='task-button' onClick={onDelete}>Delete</button>
            </div>
        </>
    );
};

export default Task;
