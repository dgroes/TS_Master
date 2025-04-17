/* 
    POLIMORFISMO
    Nos permite que un "mismo método" se comporte de forma diferente seguún la clase que lo use. Es como un botón "Guardar" que hace cosas distitnas en Word (guardar documento) Vs Photoshopt (guardar imgágenes).

    Tipos de Polimorfismo en TS
    Sobrescritura de métodos:
        - Una clase hija redefine un método de la clase padre

    Interfaces:
        - Varias clases implementan la misma interfaz pero con comportamientos distintos.


*/

//Ejemplo 1: Sobrescritura de métodos:
class Animales {
    hacerSonido(): void {
        console.log("Sonido genérico 🔊");
    }
}

class Perro extends Animales {
    //Sobrescribe el método
    hacerSonido(): void {
        console.log("!Guau guau¡ 🐶");
    }
}

class Hamster extends Animales {
    // Sobrescribe el método
    hacerSonido(): void {
        console.log("Snif snif 🐹");
    }
}

//Uso polimórfico
const animales: Animales[] = [new Perro(), new Hamster()];
animales.forEach(animales => animales.hacerSonido());



//Ejemplo 2: Con Interfaces
interface Forma {
    area(): number;
}

class Ovalo implements Forma {
    constructor(private radio: number) { }

    area(): number {
        return Math.PI * this.radio ** 2;
    }
}

class Cuadrado implements Forma {
    constructor(private lado: number) { }

    area(): number {
        return this.lado ** 2;
    }
}

// Uso polimórfico
const formas: Forma[] = [new Ovalo(3), new Cuadrado(4)];
formas.forEach(forma => console.log(forma.area()));


//DESAFIO:
/* 
🎯 Desafío: Sistema de Notificaciones
    Crea un sistema donde diferentes tipos de notificaciones (Email, SMS, App) implementen un método enviar() con comportamientos distintos:

    Interfaz Notificacion:
    - Método enviar(mensaje: string): void.

    Clases:
    - EmailNotificacion: Imprime "Enviando email: [mensaje]".
    - SMSNotificacion: Imprime "Enviando SMS: [mensaje]".
    - AppNotificacion: Imprime "Notificación en app: [mensaje]".

    Uso:
    - Crea un array de tipo Notificacion con instancias de las 3 clases.
    - Itera y llama a enviar() para cada una.

*/

interface Notificacion {
    enviar(mensaje: string): void;
}

class EmailNotificacion implements Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando Email: ${mensaje} ✉️`);
    }
}

class SMSNotificacion implements Notificacion {
    enviar(mensaje: string): void {
        console.log(`Enviando SMS: ${mensaje} 📱`);
    }
}

class AppNotificacion implements Notificacion {
    enviar(mensaje: string): void {
        console.log(`Notificación en app: ${mensaje} ❗`);
    }
}

// Array de notificaciones (sin mensajes en el constructor)
const notificadores: Notificacion[] = [
    new EmailNotificacion(),
    new SMSNotificacion(),
    new AppNotificacion()
];

// Mensajes distintos para cada tipo
const mensajes = [
    "Oferta de empleo...",
    "Kathia: ¿A qué hora llegas??",
    "Pokémon Go: Nueva Actualización"
];

// Enviamos cada mensaje
notificadores.forEach((notificador, index) => {
    notificador.enviar(mensajes[index]);
});


// MAS DESAFIOS
class Producto {
    constructor(
        public nombre: string,
        public precio: number,
        public stock: number
    ) { }
}

class Carrito {
    private productos: Producto[] = [];

    constructor() { }

    agregarProducto(producto: Producto): boolean {
        if (producto.stock <= 0) {
            console.log(`❌ ${producto.nombre} sin stock`);
            return false;
        }

        this.productos.push(producto);
        producto.stock--; // Actualizamos el stock
        console.log(`✔ ${producto.nombre} añadido`);
        return true;
    }

    eliminarProducto(nombre: string): void {
        const index = this.productos.findIndex(p => p.nombre === nombre);

        if (index === -1) {
            console.log("⚠ Producto no encontrado");
            return;
        }

        const producto = this.productos[index];
        producto.stock++; // Devolvemos stock
        this.productos.splice(index, 1);
        console.log(`🗑 ${nombre} eliminado`);
    }

    calcularTotal(): number {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    mostrarCarrito(): void {
        console.log("🛒 Contenido:");
        this.productos.forEach(p => {
            console.log(`- ${p.nombre}: $${p.precio}`);
        });
        console.log(`💵 Total: $${this.calcularTotal()}`);
    }
}

// Crear productos
const camisa = new Producto("Camisa", 25, 3);
const pantalon = new Producto("Pantalón", 40, 2);

// Usar carrito
const carrito = new Carrito();
carrito.agregarProducto(camisa);    // ✔
carrito.agregarProducto(pantalon);  // ✔
carrito.agregarProducto(camisa);    // ✔
carrito.mostrarCarrito();

carrito.eliminarProducto("Camisa"); // 🗑
carrito.mostrarCarrito();

console.log("************************************")
console.log("***********Mangas*****************")

//DESAFIO 
class Manga {
    constructor(
        public titulo: string,
        public autor: string,
        public disponible: boolean = true
    ) { }

    public prestar(): void {
        if (this.disponible === true) {
            this.disponible = false;
            console.log(`${this.titulo} 📕 prestado 😃`)
        } else if (this.disponible === false) {
            throw new Error(`El libro: ${this.titulo} ya ha sido prestado 📚`);
        }
    }

    public devolver(): void {
        if (this.disponible === false) {
            console.log(`${this.titulo} devuelto 👍`);
            this.disponible = true;
        } else {
            console.log("El libro ya está prestado");
        }
    }

}

class Biblioteca {
    constructor(
        private _mangas: [],
    ) { }

    public agregarManga(manga: Manga) {
        this._mangas.push()
    }

    public buscarPorTitulo(titulo: string) {

    }
}

const manga01 = new Manga("Naruto", "Massashi Kishimoto");
const manga02 = new Manga("One Piece", "Eiichiro Oda");
const manga03 = new Manga("Dragon Ball", "Akira Toriyama");
const manga04 = new Manga("Death Note", "Tsugumi Ohba");
const manga05 = new Manga("Fullmetal Alchemist", "Hiromu Arakawa");
const manga06 = new Manga("Hunter x Hunter", "Yoshihiro Togashi");