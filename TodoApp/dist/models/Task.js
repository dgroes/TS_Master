// C01: Exportación de clase
export class Task {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        // C02: Indicador de privado
        // C03: Declaración privada con valor inicial
        // C04: Encapsulamineto
        this._completed = false;
    }
    markAsCompleted() {
        this._completed = true;
    }
    isCompleted() {
        return this._completed;
    }
}
