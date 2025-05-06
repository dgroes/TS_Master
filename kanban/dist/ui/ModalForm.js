export class ModalForm {
    constructor() {
        this.dialog = null;
        this.openButton = null;
        // Aquí podrías hacer la asignación si estás seguro que los elementos existen desde el inicio
    }
    init() {
        this.dialog = document.getElementById("myDialog");
        this.openButton = document.getElementById("openDialog");
        if (this.dialog && this.openButton) {
            this.openButton.addEventListener("click", () => {
                this.dialog.showModal();
            });
        }
    }
}
