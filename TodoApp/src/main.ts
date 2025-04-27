import { TaskService } from "./services/TaskService.js";

// Instanciar servicio y cargar tareas guardadas
const service = new TaskService();
service.loadFromLocalStorage();

// Referencias a elementos del DOM
/* C05: Aserción de Tipo */
const form = document.getElementById("task-form") as HTMLFormElement;
const titleInput = document.getElementById("task-title") as HTMLInputElement;
const descInput = document.getElementById("task-desc") as HTMLInputElement;
const taskList = document.getElementById("task-list") as HTMLUListElement;


//Mostrar tareas en pantalla
function renderTasks(): void {
    taskList.innerHTML = ""; //Limpiar antes de volver a renderizar
    const tasks = service.getTask();

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.title} - ${task.description} ${task.isCompleted() ? " ✅" : ""}`;

        //Botón Eliminar
        const delBtn = document.createElement("button");
        delBtn.textContent = "🗑️";
        delBtn.onclick = () => {
            //Eliminar del array
            service.deleteTask(task.id);

            //Rendereizar de nuevo
            renderTasks();
        }

        //Botón Completar Tarea
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✅";
        completeBtn.onclick = () => {
            //Marcar Tarea como Completada 
            completeBtn.onclick = () => {
                task.markAsCompleted();       // cambiar estado de la tarea
                service.saveToLocalStorage(); // Guardamos cambios
                renderTasks();
            }         
        }

        li.appendChild(delBtn);
        li.appendChild(completeBtn);
        taskList.appendChild(li);
    });
}

//Agregar una nueva tarea
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    if (title === "") return;

    service.addTask(title, description);
    renderTasks();

    titleInput.value = "";
    descInput.value = "";
});

//Mostrar tareas al cargar
renderTasks();
