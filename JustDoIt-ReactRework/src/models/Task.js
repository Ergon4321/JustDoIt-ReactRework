class Task {
    constructor(id, title, description = "", category = "default.png", priority = 1) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.priority = priority;
    }
}

export default Task;
