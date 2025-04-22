//Decorador Básico
/* 
    Un Decorador de clase es una función que se ejecuta cuando se delcara una clase.

    Sirve para añadir, modificar o revisar comportamiento de esa clase antes de usarla.

    Si yo creo una clase con sus atributos y/o métodos, puedo fuera de la clase crear funciones (decoradores), y luego usarlas para modificar o añadir comportamiento a esa clase sin tener que tocar su código directamente.
    se pueden agregar cosas como propiedades, logs, validaciones, metadatos, sin alterar la definición original de la clase.

*/

function DecoradorTurbo(target: Function) {
    console.log("El coche está equipado con un turbo", target.name)

}

@DecoradorTurbo
class Coche {
    constructor() { console.log("El coche está arrancado!") }
}

let miCoche = new Coche();



//Otro ejemplo de Decorador
function logConstructor(constructor: Function) {
    console.log("Clase creada:", constructor.name);
}
@logConstructor
class Libro { constructor(public titulo: string) { } }
//Al crear la clase Libro, el decorador @logConstructor se ejecuta.
//Imprime el nombre de la clase: "Clase creada: Libro".



//Mäs ejemplo de Decoradores:
function agregarVersion(version: string) {
    return function (constructor: Function) {
        constructor.prototype.version = version;
    };
}

@agregarVersion("1.0.0")
class App {
    public version!: string;
    constructor(public nombre: string) { }
}

const miApp = new App("MiAplicación");
console.log(miApp.version); // 👉 "1.0.0"


//Otro ejemplo:
function saludarAlCrear(constructor: Function) {
    console.log("Clase Creada: ", constructor.name)
}

@saludarAlCrear
class Ussuario {
    constructor(public nombre: string) { }
}


//DECORADORES CON PARAMETROS
function DecoradorConMensje(mensaje: string) {
    return function (target: any) {
        console.log(`Mi ${target.name} te manda este mensaje ${mensaje}`);
    }
}

@DecoradorConMensje("Tengo una rueda pinchada")
class Bicicleta {
    constructor() {
        console.log("La bici está andando")
    }
}

let miBici = new Bicicleta();

//Otro ejemplo de Decorador con parámetros
function agregarAutor(nombre: string) {
    return function (constructor: Function) {
        constructor.prototype.autor = nombre;
    };
}

@agregarAutor("Diego Dev")
class Libbro {
    public autor!: string;
    constructor(public titulo: string) { }
}

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

function AgregarMetodo(target: any) {
    target.prototype.morder = function () {
        console.log("Morder pierna 🦵(desde un método extra de decorador )");
    }
}

interface Murcielago {
    morder: () => void;
}

@AgregarMetodo
class Murcielago {
    constructor() {
        console.log("🦇 Volando volando 🦇")
    }
}

let bat = new Murcielago();
bat.morder();

// con Any:
(bat as any).morder();