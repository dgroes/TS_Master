// Importar el Modal
import { ModalForm } from "./ui/ModalForm.js"
const modal = new ModalForm();
modal.init(); // método para configurar listeners o abrir/cerrar

//Importar TaskService
import { TaskService } from "./services/TaskServices.js";

//Instanciar servicio y cargar tareas guardadas
const service = new TaskService();
service.loadFromLocalStorage();

/* Referencias al DOM */
// Elementos del formulario de Creación
const form = document.getElementById("task-form") as HTMLFormElement;
const titleTask = document.getElementById("task-title") as HTMLInputElement;
const descriptionTask = document.getElementById("task-description") as HTMLInputElement;

// Agregar una nueva tarea
form.addEventListener("submit", (e) => {
    e.preventDefault(); /* C04: Comportamiento por Defecto (preventDefault()) */

    const title = titleTask.value.trim();
    const description = descriptionTask.value.trim();
    if (title === "") {
        alert("El titulo de la tarea es obligatorio");
        titleTask.focus(); //Enfocar el campo faltante
        return;/* C05 Validación básica */
    }

    if (description === "") {
        alert("La descripción de la tarea es obligatoria");
        descriptionTask.focus();
        return;
    }


    service.addTask(title, description);
    // renderTasks();

    titleTask.value = "";
    descriptionTask.value = "";

})


/* C01: Variable para almacenar el elemento que se está arrastrando */
let draggedElement: HTMLElement | null = null;

/* C02: Seleccionar elementos que se pueden arrastrar */
document.querySelectorAll(".draggable").forEach(el => {

    //Se activa cuando el usuario empieza a arrastrar un elemento; e es el evento DragEvent.
    el.addEventListener("dragstart", (e) => {
        const event = e as DragEvent;
        draggedElement = el as HTMLElement;
        event.dataTransfer?.setData("text/plain", ""); // Necesario en algunos navegadores
    });
});

/* C03: Zonas en donde soltar elementos */
document.querySelectorAll(".dropzone").forEach(zone => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault(); // Necesario para permitir el drop
    });

    zone.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedElement) {
            zone.appendChild(draggedElement); // Mover el div arrastrado al nuevo article
            draggedElement = null;
        }
    });
});