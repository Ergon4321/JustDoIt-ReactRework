import React from 'react';

const Task = ({ task, onDelete }) => {
    return (
        <>
            <div className="task">
                <span>{task.text}</span>
            </div>
            <div className='task-buttons'>
                <button onClick={onDelete}>Delete</button>
            </div>
        </>
    );
};

export default Task;
