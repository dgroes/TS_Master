import { Task } from "../models/Task.js";

export class TaskService {
    private task: Task[] = [];

    public addTask(title: string, description: string): void {
        const newTask = new Task(Date.now(), title, description);
        this.task.push(newTask);
        this.saveToLocalStorage();
    }

    public getTask(): Task[] {
        return this.task;
    }

    public saveToLocalStorage(): void {
        localStorage.setItem("task", JSON.stringify(this.task));
    }

    public loadFromLocalStorage(): void {
        const data = localStorage.getItem("task");
        if (data) {
            const rawTasks = JSON.parse(data);
            this.task = rawTasks.map((t: any) => {
                const task = new Task(t.id, t.title, t.description);
                if (t._completed) task.markAsCompleted();
                return task;
            });
        }
    }

    public deleteTask(id: number): void {
        this.task = this.task.filter(task => task.id !== id);
        this.saveToLocalStorage();
    }

}