"use strict";
class Gato {
    constructor(nombre, raza, color) {
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }
    maullar() {
        console.log(`${this.nombre} dice: Miau Miau! 😸`);
    }
    descripcion() {
        console.log(`El cato es de color: ${this.color}`);
    }
    getRaza() {
        return this.raza;
    }
    setRaza(raza) {
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
    constructor(contenido) {
        this._contenido = contenido;
    }
    //Geter (acceso controlado)
    get contendido() {
        return this._contenido;
    }
    //Seter (validación)
    set contenido(nuevoContenido) {
        if (nuevoContenido.length > 0) {
            this._contenido = nuevoContenido;
        }
    }
}
const miCaja = new Caja("libro");
console.log(miCaja.contenido); //libro usa el getter
miCaja.contenido = ""; //no se modifica
