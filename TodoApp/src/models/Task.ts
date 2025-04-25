// C01: Exportación de clase
export class Task {

    // C02: Indicador de privado
    // C03: Declaración privada con valor inicial
    // C04: Encapsulamineto
    private _completed: boolean = false;

    constructor(
        public id: number,
        public title: string,
        public description: string
    ) { }

    public markAsCompleted(): void {
        this._completed = true;
    }

    public isCompleted(): boolean {
        return this._completed;
    }


}