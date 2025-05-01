import { TaskService } from "./services/TaskService.js";
// Instanciar servicio y cargar tareas guardadas
const service = new TaskService();
service.loadFromLocalStorage();
// Referencias a elementos del DOM
/* C05: Aserción de Tipo */
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const taskList = document.getElementById("task-list");
const completedTable = document.getElementById("completedTable");
//Mostrar tareas en pantalla
function renderTasks() {
    taskList.innerHTML = ""; //Limpiar antes de volver a renderizar
    completedTable.innerHTML = "<tr><th>Título</th><th>Descripción</th><th>Acciones</th></tr>"; //Limpiar y crear encabezado de la tabla
    const tasks = service.getTask();
    tasks.forEach(task => {
        if (task.isCompleted()) {
            // --- TAREAS COMPLETADAS EN TABLA ---
            const row = document.createElement("tr"); //Fila para la tabla
            const titleCell = document.createElement("td"); //Celda Título
            titleCell.textContent = task.title;
            const descCell = document.createElement("td"); //Celda Descripción
            descCell.textContent = task.description;
            const actionsCell = document.createElement("td"); //Celda Acciones
            //Botón Eliminar
            const delBtn = document.createElement("button");
            delBtn.textContent = "🗑️";
            delBtn.onclick = () => {
                //Eliminar del array
                service.deleteTask(task.id);
                //Rendereizar de nuevo
                renderTasks();
            };
            actionsCell.appendChild(delBtn);
            row.appendChild(titleCell);
            row.appendChild(descCell);
            row.appendChild(actionsCell);
            completedTable.appendChild(row);
        }
        else {
            // --- TAREAS PENDIENTES EN LISTA ---
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
            };
            //Botón Completar Tarea
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "✅";
            completeBtn.onclick = () => {
                //Marcar Tarea como Completada 
                task.markAsCompleted(); // cambiar estado de la tarea
                service.saveToLocalStorage(); // Guardamos cambios
                renderTasks();
            };
            li.appendChild(delBtn);
            li.appendChild(completeBtn);
            taskList.appendChild(li);
        }
    });
}
//Agregar una nueva tarea
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    if (title === "")
        return;
    service.addTask(title, description);
    renderTasks();
    titleInput.value = "";
    descInput.value = "";
});
//Mostrar tareas al cargar
renderTasks();
