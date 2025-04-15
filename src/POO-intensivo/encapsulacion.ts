//POO: Encapsulación
/* 
    Es un principio de POO que oculta los detalles internos de una clase y controla el acceso a sus propiedades y métodos.
    En TS se utiliza: 
        - Modificadores de acceso: public, priavate, protected.
        - Getters/Setters: para acceder/modificar propiedades privadas de forma segura.

*/

class CuentaBancaria {
    private _saldo: number; // Propiedad privada (solo accesible dentro de la clase)

    constructor(saldoInicial: number) {
        this._saldo = saldoInicial;
    }

    // Método público para ver el saldo (getter)
    public get saldo(): number {
        return this._saldo;
    }

    // Método público para depositar (controlado)
    public depositar(monto: number): void {
        if (monto > 0) {
            this._saldo += monto;
        } else {
            console.error("Monto inválido");
        }
    }
}


//Uso de la clase
const miCuenta = new CuentaBancaria(1000);
console.log(miCuenta.saldo) //Usa el getter
miCuenta.depositar(500); //Saldo + 500
/* miCuenta._saldo = 0; */ //El saldo es privado


//Ejercicio de practica
class Usuario {
    public nombreUsuario: string;
    private _contrasena: string;
    private _direccion: string;
    private _edad: number

    constructor(nombreUsuario: string, contrasena: string, direccion: string, edad: number) {
        this.nombreUsuario = nombreUsuario;
        this._contrasena = contrasena;
        this._direccion = direccion;
        this._edad = edad;
    }

    public get obtenerNombre(): string {
        return this.nombreUsuario;
    }

    private obtenerMiContrasena(): string {
        return this._contrasena;
    }

    /*  public verContrasena(): string {
         let cantidad:string[] = [];
         const str = this._contrasena;
         for (let index = 0; index < str.length; index++) {
             cantidad.push("*");
         }
 
         return cantidad.join("");
     } */

    public verContrasena(): string {
        return "*".repeat(this._contrasena.length);
    }

    private set cambiarContrasena(nuevaContrasena: string): string {
        if (nuevaContrasena.length >= 5) {
            this._contrasena = nuevaContrasena;
        } else {
            console.log("La pass debe ser mayor a 5 caracteres");
        }

    }
}

const miUsuario = new Usuario("Diego", "1234d", "Santiago", 26);
console.log(miUsuario.verContrasena);
