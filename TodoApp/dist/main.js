import { TaskService } from "./services/TaskService.js";
// Instanciar servicio y cargar tareas guardadas
const service = new TaskService();
service.loadFromLocalStorage();
// Referencias a elementos del DOM
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText === "")
        return;
    const li = document.createElement("li");
    li.textContent = taskText;
    //botón eleiminar
    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.onclick = () => li.remove();
    li.appendChild(btn);
    taskList.appendChild(li);
    input.value = "";
});
