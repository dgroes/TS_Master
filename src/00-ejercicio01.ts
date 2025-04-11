/* EJERCICIOS */
//Ejercicios prácticos de TS enfocados en tipos básicos, funciones, arrays, objetocs y union types.

//01 Función con tipos explícitos
function sumar(a: number, b: number): number {
    return a + b
}

//02: Función con parámetro opcional
function saludar(nombre: string, edad?: number) {
    if (edad == null) {
        return "Hola " + nombre;
    } else {
        return "Hola, " + nombre + ", tienes " + edad + " años";
    }

    //O se puede hacer esto:
    /* return `Hola, ${nombre}${edad ? `, tienes ${edad} años` : ''}`; */
}

//03: Union Types
function formatearID(id: string | number): string {
    return `ID: ${id}`; // Convierte automáticamente a string
}

//04: Array de tipo mixto
let datos: (string | number)[] = ["TS", 100, "JS", 200];

//05: Objeto con tipo explícito:
interface Producto {
    nombre: string;
    precio: number;
    enStock?: boolean;
}
const producto1: Producto = {
    nombre: "Galletas 🍪",
    precio: 1_220,
    enStock: true
};

//06: Función con objetos
const producto2: Producto = {
    nombre: "Bolsa de 400 Gramos de Pan 🍞",
    precio: 3750,
    enStock: true,
};

const producto3: Producto = {
    nombre: "Bolsa de 300 Gramos de Kiwi🥝",
    precio: 3110,
    enStock: false,
};

function calcularTotal(productos: Producto[]): number {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

// Uso:
const productos: Producto[] = [producto1, producto2, producto3];
console.log(calcularTotal(productos));