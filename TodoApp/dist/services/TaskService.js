import { Task } from "../models/Task.js";
export class TaskService {
    constructor() {
        this.task = [];
    }
    addTask(title, description) {
        const newTask = new Task(Date.now(), title, description);
        this.task.push(newTask);
        this.saveToLocalStorage();
    }
    getTask() {
        return this.task;
    }
    saveToLocalStorage() {
        localStorage.setItem("task", JSON.stringify(this.task));
    }
    loadFromLocalStorage() {
        const data = localStorage.getItem("task");
        if (data) {
            const rawTasks = JSON.parse(data);
            this.task = rawTasks.map((t) => {
                const task = new Task(t.id, t.title, t.description);
                if (t._completed)
                    task.markAsCompleted();
                return task;
            });
        }
    }
}
