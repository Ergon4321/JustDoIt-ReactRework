class TaskManager {
    constructor() {
        if (!TaskManager.instance) {
            this.tasks = [];
            TaskManager.instance = this;
        }
        return TaskManager.instance;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }

    getTasks() {
        return [...this.tasks];
    }
}

const taskManager = new TaskManager();
Object.freeze(taskManager);

export default taskManager;