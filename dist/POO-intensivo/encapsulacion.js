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
