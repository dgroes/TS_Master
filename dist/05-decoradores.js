"use strict";
//Decorador Básico
/*
    Un Decorador de clase es una función que se ejecuta cuando se delcara una clase.

    Sirve para añadir, modificar o revisar comportamiento de esa clase antes de usarla.

    Si yo creo una clase con sus atributos y/o métodos, puedo fuera de la clase crear funciones (decoradores), y luego usarlas para modificar o añadir comportamiento a esa clase sin tener que tocar su código directamente.
    se pueden agregar cosas como propiedades, logs, validaciones, metadatos, sin alterar la definición original de la clase.

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function DecoradorTurbo(target) {
    console.log("El coche está equipado con un turbo", target.name);
}
let Coche = class Coche {
    constructor() { console.log("El coche está arrancado!"); }
};
Coche = __decorate([
    DecoradorTurbo,
    __metadata("design:paramtypes", [])
], Coche);
let miCoche = new Coche();
//Otro ejemplo de Decorador
function logConstructor(constructor) {
    console.log("Clase creada:", constructor.name);
}
let Libro = class Libro {
    constructor(titulo) {
        this.titulo = titulo;
    }
};
Libro = __decorate([
    logConstructor,
    __metadata("design:paramtypes", [String])
], Libro);
//Al crear la clase Libro, el decorador @logConstructor se ejecuta.
//Imprime el nombre de la clase: "Clase creada: Libro".
//Mäs ejemplo de Decoradores:
function agregarVersion(version) {
    return function (constructor) {
        constructor.prototype.version = version;
    };
}
let App = class App {
    constructor(nombre) {
        this.nombre = nombre;
    }
};
App = __decorate([
    agregarVersion("1.0.0"),
    __metadata("design:paramtypes", [String])
], App);
const miApp = new App("MiAplicación");
console.log(miApp.version); // 👉 "1.0.0"
//Otro ejemplo:
function saludarAlCrear(constructor) {
    console.log("Clase Creada: ", constructor.name);
}
let Ussuario = class Ussuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
};
Ussuario = __decorate([
    saludarAlCrear,
    __metadata("design:paramtypes", [String])
], Ussuario);
//DECORADORES CON PARAMETROS
function DecoradorConMensje(mensaje) {
    return function (target) {
        console.log(`Mi ${target.name} te manda este mensaje ${mensaje}`);
    };
}
let Bicicleta = class Bicicleta {
    constructor() {
        console.log("La bici está andando");
    }
};
Bicicleta = __decorate([
    DecoradorConMensje("Tengo una rueda pinchada"),
    __metadata("design:paramtypes", [])
], Bicicleta);
let miBici = new Bicicleta();
//Otro ejemplo de Decorador con parámetros
function agregarAutor(nombre) {
    return function (constructor) {
        constructor.prototype.autor = nombre;
    };
}
let Libbro = class Libbro {
    constructor(titulo) {
        this.titulo = titulo;
    }
};
Libbro = __decorate([
    agregarAutor("Diego Dev"),
    __metadata("design:paramtypes", [String])
], Libbro);
const miLibro = new Libbro("Mi primer libro");
console.log(miLibro.autor); // 👉 "Diego Dev"
//Explicación:
/*
    Explicación paso a paso por GPT

    1. function agregarAutor(nombre: string) { ... }
    Esto es una función decoradora con parámetro. Tú puedes pasarle un valor (en este caso, un string con el nombre del autor).

    2. return function (constructor: Function) { ... }
    Este es el decorador real. Recibe como parámetro el constructor de la clase y le agrega una propiedad autor.

    3. constructor.prototype.autor = nombre;
    Aquí es donde el decorador modifica el prototipo de la clase y le agrega una nueva propiedad autor.

    En JavaScript/TypeScript, el prototype es lo que permite que las instancias compartan propiedades o métodos.

    4. @agregarAutor("Diego Dev")
    Aquí estás usando el decorador y pasándole "Diego Dev" como parámetro.

    5. console.log(miLibro.autor);
    Ya puedes acceder a esa propiedad como si fuera parte de la clase, aunque no la declaraste dentro de ella.

*/
//Otro ejemplo, solucionando: "morder no exite" con una interface o con anyX
function AgregarMetodo(target) {
    target.prototype.morder = function () {
        console.log("Morder pierna 🦵(desde un método extra de decorador )");
    };
}
let Murcielago = class Murcielago {
    constructor() {
        console.log("🦇 Volando volando 🦇");
    }
};
Murcielago = __decorate([
    AgregarMetodo,
    __metadata("design:paramtypes", [])
], Murcielago);
let bat = new Murcielago();
bat.morder();
// con Any:
bat.morder();
