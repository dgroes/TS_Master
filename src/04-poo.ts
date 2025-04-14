class Gato {
    public nombre: string;
    protected raza: string;
    private color: string;

    constructor(nombre: string, raza: string, color: string) {
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }

    protected maullar(): void {
        console.log(`${this.nombre} dice: Miau Miau! 😸`);
    }

    descripcion(): void {
        console.log(`El cato es de color: ${this.color}`)
    }

    getRaza(): string {
        return this.raza;
    }

    setRaza(raza: string) {
        this.raza = raza;
    }

}

let miGato = new Gato("Dalpo", "Pelo corto", "Gris Oscruto con machas Blancas");

/* // La propiedad color es privada y solo se puede acceder a ella en la clase Gato .
console.log(miGato.color);  */

/* //La propiedad raza está protegida y solo se puede acceder a ella en la clase Gato y las subclases de esta.
console.log(miGato.raza)  */

//Se puede acceser a la propiedad porque es "publica"
console.log(miGato.nombre);

//El método es "protected" por ende no se puede utilizar dentro de la clase o subclases
// miGato.maullar();


//Encapsulamiento
/* 
    Ocultar los detalles internos de una clase y controlar el acceso a sus propieades /métodos.
*/






class Caja {
    private _contenido: string; //Propiedad privada

    constructor(contenido: string) {
        this._contenido = contenido;
    }

    //Geter (acceso controlado)
    get contendido(): string {
        return this._contenido;
    }

    //Seter (validación)
    set contenido(nuevoContenido: string) {
        if (nuevoContenido.length > 0) {
            this._contenido = nuevoContenido;
        }
    }
}

const miCaja = new Caja("libro");
console.log(miCaja.contenido); //libro usa el getter
miCaja.contenido = ""; //no se modifica
