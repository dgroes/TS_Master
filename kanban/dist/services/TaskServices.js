import { Task } from "../models/Task.js";
export class TaskService {
    constructor() {
        this.task = [];
    }
    //Agregar una nueva tarea
    addTask(title, description) {
        const newTask = new Task(Date.now(), title, description, "to-do");
        this.task.push(newTask);
        this.saveToLocalStorage();
    }
    getTask() {
        return this.task;
    }
    //Definir el guardado del LocalStorage
    saveToLocalStorage() {
        localStorage.setItem(TaskService.STORAGE_KEY, JSON.stringify(this.task));
    }
    //Cargar datos guardados en el LocalStorage
    loadFromLocalStorage() {
        const data = localStorage.getItem(TaskService.STORAGE_KEY);
        if (data) {
            //Con Parse se convierte un String a JSON
            const rawTasks = JSON.parse(data);
            this.task = rawTasks.map((t) => {
                new Task(t.id, t.title, t.description, t.status);
            });
        }
    }
}
TaskService.STORAGE_KEY = "kanban_tasks"; /* C06 Key Personalizada */
