"use strict";
// Clase y Objetos
/* C01: Inicializar */
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //Métodos
    fichaAnimal() {
        console.log(`Animal: ${this.nombre} edad: ${this.edad} años`);
    }
    //Método: Protegido
    condicionMedia() {
        console.log(`El animal ${this.nombre} tiene Problemas cardiacos`);
    }
}
//Crear un objeto en base a la clase Animal
/* C02: Inferencia de argumentos */
let animal01 = new Animal("Perro", 10);
console.log(animal01.nombre);
animal01.fichaAnimal();
// animal01.condicionMedia(); /* C03: Métodos protegidos */
//Ejemplo de Abstracción en de clases en TypeScript
//Clase abstracta (plantilla)
class Figura {
    //Mëtodo concreto (compartido por todas las subclases)
    mostrarArea() {
        console.log(`Área: ${this.area()}`);
    }
}
//Subclase que implementan la abstracción:
class Circulo extends Figura {
    constructor(radio) {
        super(); //Llama al constructor de la clase padre
        this.radio = radio;
    }
    //Implementación obligatoria del método abstracto
    area() {
        return Math.PI * this.radio ** 2;
    }
}
class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    area() {
        return this.ancho * this.alto;
    }
}
