export class DragDropManager {
    constructor() {
        /* C01: Variable para almacenar el elemento que se está arrastrando */
        this.draggedElement = null;
    }
    init() {
        /* C02: Seleccionar elementos que se pueden arrastrar */
        document.querySelectorAll(".draggable").forEach(el => {
            //Se activa cuando el usuario empieza a arrastrar un elemento; e es el evento DragEvent.
            el.addEventListener("dragstart", (e) => {
                var _a;
                const event = e;
                this.draggedElement = el;
                (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/plain", ""); // Necesario en algunos navegadores
            });
        });
        /* C03: Zonas en donde soltar elementos */
        document.querySelectorAll("#dropzone").forEach(zone => {
            zone.addEventListener("dragover", (e) => {
                e.preventDefault(); // Necesario para permitir el drop
            });
            zone.addEventListener("drop", (e) => {
                e.preventDefault();
                if (this.draggedElement) {
                    zone.appendChild(this.draggedElement); // Mover el div arrastrado al nuevo article
                    this.draggedElement = null;
                }
            });
        });
    }
}
