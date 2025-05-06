import { Task } from "../models/Task.js";

export class TaskService {
    private static readonly STORAGE_KEY = "kanban_tasks"; /* C06 Key Personalizada */
    private task: Task[] = [];

    //Agregar una nueva tarea
    public addTask(title: string, description: string): void {
        const newTask = new Task(Date.now(), title, description, "to-do");
        this.task.push(newTask);
        this.saveToLocalStorage();
    }

    public getTask(): Task[] {
        return this.task;
    }

    //Definir el guardado del LocalStorage
    public saveToLocalStorage(): void {
        localStorage.setItem(TaskService.STORAGE_KEY, JSON.stringify(this.task));
    }

    //Cargar datos guardados en el LocalStorage
    public loadFromLocalStorage(): void{
        const data = localStorage.getItem(TaskService.STORAGE_KEY);
        if (data){
            //Con Parse se convierte un String a JSON
            const rawTasks = JSON.parse(data);
            this.task = rawTasks.map((t:any) => {
                new Task(t.id, t.title, t.description, t.status);
            })
        }
    }
}