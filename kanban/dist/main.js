// Importar el Modal
import { ModalForm } from "./ui/ModalForm.js";
const modal = new ModalForm();
modal.init(); // método para configurar listeners o abrir/cerrar
//Importar TaskService
import { TaskService } from "./services/TaskServices.js";
//Instanciar servicio y cargar tareas guardadas
const service = new TaskService();
service.loadFromLocalStorage();
/* C01: Variable para almacenar el elemento que se está arrastrando */
let draggedElement = null;
/* C02: Seleccionar elementos que se pueden arrastrar */
document.querySelectorAll(".draggable").forEach(el => {
    //Se activa cuando el usuario empieza a arrastrar un elemento; e es el evento DragEvent.
    el.addEventListener("dragstart", (e) => {
        var _a;
        const event = e;
        draggedElement = el;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/plain", ""); // Necesario en algunos navegadores
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
