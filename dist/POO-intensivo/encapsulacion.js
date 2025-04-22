"use strict";
//POO: Encapsulación
/*
    Es un principio de POO que oculta los detalles internos de una clase y controla el acceso a sus propiedades y métodos.
    En TS se utiliza:
        - Modificadores de acceso: public, priavate, protected.
        - Getters/Setters: para acceder/modificar propiedades privadas de forma segura.

*/
class CuentaBancaria {
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }
    // Método público para ver el saldo (getter)
    get saldo() {
        return this._saldo;
    }
    // Método público para depositar (controlado)
    depositar(monto) {
        if (monto > 0) {
            this._saldo += monto;
        }
        else {
            console.error("Monto inválido");
        }
    }
}
//Uso de la clase
const miCuenta = new CuentaBancaria(1000);
console.log(miCuenta.saldo); //Usa el getter
miCuenta.depositar(500); //Saldo + 500
/* miCuenta._saldo = 0; */ //El saldo es privado
//Ejercicio de practica
class Usuario {
    constructor(nombreUsuario, contrasena) {
        this.nombreUsuario = nombreUsuario;
        this._contrasena = contrasena;
    }
    // Getter para contraseña oculta
    get contrasenaOculta() {
        return "*".repeat(this._contrasena.length);
    }
    // Setter para cambiar contraseña (con validación)
    set cambiarContrasena(nuevaContrasena) {
        if (nuevaContrasena.length < 5) {
            throw new Error("La contraseña debe tener al menos 5 caracteres");
        }
        this._contrasena = nuevaContrasena;
    }
    // Método adicional para ver contraseña (sin validación)
    verContrasena() {
        return this._contrasena;
    }
}
// Uso
const usuario = new Usuario("Ana", "clave123");
console.log(usuario.contrasenaOculta); // "********"
console.log(usuario.verContrasena()); // "clave123"
try {
    usuario.cambiarContrasena = "nueva";
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("Error desconocido");
    }
}
console.log(usuario.verContrasena());
//Mäs ecapsulación
/*
    La encapsulación es como una caja fuerta para los datos
        1. Privados: Propiedades/métodos solo usables dentro de la clase (como la combinación secreta de la caja)
        2. Público: lo que sí puedes mostrar o módificar desde fuera (como un botón para sacar dinero)

    Objetivo de la encapsulación: Evitar que otros modificquen los datos directamente, obligandilos a usar método seguros.
*/
//Ejemplo clase gato
console.log("*********Ejmplo Gato************");
class Gatito {
    constructor(edad) {
        this._edad = edad;
    }
    // 🔓 Método público para ver la edad
    get edad() {
        return this._edad;
    }
    // 🔓 Método seguro para "envejecer" al gatito
    cumplirAnios() {
        this._edad++;
    }
}
const dalpo = new Gatito(3);
console.log(dalpo.edad); //3 (usa el getter)
dalpo.cumplirAnios(); //Ahora tiene 4 años
console.log(dalpo.edad);
/* dalpo._edad = 200; */ //❌ Error: _edad es privado
//DESAFIO
/*
    Crea una clase que:

    Tenga una propiedad privada _paginas (número).

    Un getter público paginas que devuelva el valor.

    Un método público leer() que reste 1 página cada vez que se llame (y si no hay páginas, lance un error).
*/
/*
class Libro {
    private _paginas: number;
    private _titulo: string;

    constructor(paginas: number, titulo: string) {
        this._paginas = paginas;
        this._titulo = titulo;
    }

    // Getters
    public get paginas(): number {
        return this._paginas;
    }

    public get titulo(): string {
        return this._titulo;
    }

    // Setter para título
    public set titulo(nuevoTitulo: string) {
        if (nuevoTitulo.length < 3) {
            throw new Error("❌ El título debe tener al menos 3 caracteres");
        }
        this._titulo = nuevoTitulo;
    }

    // Método para leer
    public leerPagina(): number {
        if (this._paginas === 0) {
            throw new Error("¡No hay páginas por leer! 📖❌");
        }
        return --this._paginas;
    }
}

const libro = new Libro(100, "Cien años de soledad");
libro.titulo = "Rayuela"; // Usa el setter como propiedad
console.log(libro.titulo); // Usa el getter */ 
