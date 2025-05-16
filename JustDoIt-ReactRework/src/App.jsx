import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import './App.css';
import taskManager from './singleton/TaskManager';
import { generateId } from './utils/IdGenerator';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(taskManager.getTasks());
    }, []);

    function handleAddTask(newTask) {
        if (newTask.trim()) {
            const task = { id: generateId(), text: newTask };
            taskManager.addTask(task);
            setTasks([...taskManager.getTasks()]);
        }
    }

    function handleDeleteTask(id) {
        const index = tasks.findIndex((task) => task.id === id);
        if (index !== -1) {
            taskManager.deleteTask(index);
            setTasks([...taskManager.getTasks()]);
        }
    }

    function updateTaskOrder(newOrder) {
        taskManager.setTasks(newOrder);
        setTasks([...newOrder]);
    }


    return (
        <div>
            <h1>ToDoList - Drag & Drop</h1>
            <TaskInput onAdd={handleAddTask} />
            <TaskList
                tasks={tasks}
                onDelete={handleDeleteTask}
                updateTaskOrder={updateTaskOrder}
            />
        </div>
    );
}

export default App;
