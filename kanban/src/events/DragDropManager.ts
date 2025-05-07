export class DragDropManager {
    /* C01: Variable para almacenar el elemento que se está arrastrando */
    private draggedElement: HTMLElement | null = null;

    public init(): void {
        /* C02: Seleccionar elementos que se pueden arrastrar */
        document.querySelectorAll(".draggable").forEach(el => {

            //Se activa cuando el usuario empieza a arrastrar un elemento; e es el evento DragEvent.
            el.addEventListener("dragstart", (e) => {
                const event = e as DragEvent;
                this.draggedElement = el as HTMLElement;
                event.dataTransfer?.setData("text/plain", ""); // Necesario en algunos navegadores
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