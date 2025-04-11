"use strict";
/* EJERCICIOS */
//Ejercicios prácticos de TS enfocados en tipos básicos, funciones, arrays, objetocs y union types.
//01 Función con tipos explícitos
function sumar(a, b) {
    return a + b;
}
//02: Función con parámetro opcional
function saludar(nombre, edad) {
    if (edad == null) {
        return "Hola " + nombre;
    }
    else {
        return "Hola, " + nombre + ", tienes " + edad + " años";
    }
    //O se puede hacer esto:
    /* return `Hola, ${nombre}${edad ? `, tienes ${edad} años` : ''}`; */
}
//03: Union Types
function formatearID(id) {
    return `ID: ${id}`; // Convierte automáticamente a string
}
//04: Array de tipo mixto
let datos = ["TS", 100, "JS", 200];
const producto1 = {
    nombre: "Galletas 🍪",
    precio: 1220,
    enStock: true
};
//06: Función con objetos
const producto2 = {
    nombre: "Bolsa de 400 Gramos de Pan 🍞",
    precio: 3750,
    enStock: true,
};
const producto3 = {
    nombre: "Bolsa de 300 Gramos de Kiwi🥝",
    precio: 3110,
    enStock: false,
};
function calcularTotal(productos) {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}
// Uso:
const productos = [producto1, producto2, producto3];
console.log(calcularTotal(productos));
