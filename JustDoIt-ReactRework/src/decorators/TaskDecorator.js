class TaskDecorator {
    constructor(task) {
        this.task = task;
    }

    setDescription(description) {
        this.task.description = description;
        return this;
    }

    setCategory(category) {
        this.task.category = category;
        return this;
    }

    setPriority(priority) {
        if (priority >= 1 && priority <= 3) {
            this.task.priority = priority;
        }
        return this;
    }

    getTask() {
        return this.task;
    }
}

export default TaskDecorator;
