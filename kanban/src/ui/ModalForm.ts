export class ModalForm {
    private dialog: HTMLDialogElement | null = null;
    private openButton: HTMLButtonElement | null = null;
  
    constructor() {
      // Aquí podrías hacer la asignación si estás seguro que los elementos existen desde el inicio
    }
  
    public init(): void {
        this.dialog = document.getElementById("myDialog") as HTMLDialogElement;
        this.openButton = document.getElementById("openDialog") as HTMLButtonElement;
      
        if (this.dialog && this.openButton) {
          this.openButton.addEventListener("click", () => {
            this.dialog!.showModal();
          });
        }
      }
      
  }
  