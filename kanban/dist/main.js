// Importar el Modal
import { ModalForm } from "./ui/ModalForm.js";
const modal = new ModalForm();
modal.init(); // método para configurar listeners o abrir/cerrar
//Importar TaskService
import { TaskService } from "./services/TaskServices.js";
//Instanciar servicio y cargar tareas guardadas
const service = new TaskService();
service.loadFromLocalStorage();
/* Referencias al DOM */
// Elementos del formulario de Creación
const form = document.getElementById("task-form");
const titleTask = document.getElementById("task-title");
const descriptionTask = document.getElementById("task-description");
// Agregar una nueva tarea
form.addEventListener("submit", (e) => {
    e.preventDefault(); /* C04: Comportamiento por Defecto (preventDefault()) */
    const title = titleTask.value.trim();
    const description = descriptionTask.value.trim();
    if (title === "") {
        alert("El titulo de la tarea es obligatorio");
        titleTask.focus(); //Enfocar el campo faltante
        return; /* C05 Validación básica */
    }
    if (description === "") {
        alert("La descripción de la tarea es obligatoria");
        descriptionTask.focus();
        return;
    }
    service.addTask(title, description);
    renderTasks();
    //Formatio de inputs:
    titleTask.value = "";
    descriptionTask.value = "";
});
/* LLevar las tasks almacenasdas a la tabla de to-do */
//Definir los elementos del kanban (section) y su status correspondiente
/* C07 Array de Objetos literales */
const sections = [
    { element: document.querySelector(".kanban--todo"), status: "to-do" },
    { element: document.querySelector(".kanban--progress"), status: "in-progress" },
    { element: document.querySelector(".kanban--done"), status: "done" }
];
const kanbanTitle = document.querySelector(".kanban__title");
function renderTasks() {
    const tasks = service.getTask();
    /* C08: Bucle con destructuring de objetos   */
    sections.forEach(({ element, status }) => {
        //Limpiar y agregar titulo
        /* C09: non-null assertion operador */
        element.innerHTML = '';
        /* C10: Clon de nodo */
        const titleClone = kanbanTitle.cloneNode(true); //Clona el titulo para cada seccion
        element.appendChild(titleClone);
        /* C11: Filtrar y renderizar tareas por status */
        tasks
            .filter(task => task.status === status)
            .forEach(task => {
            const taskElement = document.createElement("article");
            taskElement.className = "draggable";
            taskElement.draggable = true;
            taskElement.innerHTML = `
                    <header>${task.title}</header>
                    ${task.description}
                `;
            element.appendChild(taskElement);
        });
    });
}
//Mostrar tareas al cargar
renderTasks();
//Importar fichero de Drag
import { DragDropManager } from "./events/DragDropManager.js";
const dragDrop = new DragDropManager();
dragDrop.init();
