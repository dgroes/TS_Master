// Clase y Objetos

/* C01: Inicializar */
class Animal {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //Métodos
    fichaAnimal() {
        console.log(`Animal: ${this.nombre} edad: ${this.edad} años`);
    }

    //Método: Protegido
    protected condicionMedia() {
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
abstract class Figura{
    //Método abstraco (las subblases deben implementarlo)
    abstract area(): number;

    //Mëtodo concreto (compartido por todas las subclases)
    mostrarArea(): void{
        console.log(`Área: ${this.area()}`);
    }
}

//Subclase que implementan la abstracción:
class Circulo extends Figura{
    constructor(private radio:number){
        super(); //Llama al constructor de la clase padre
    }

    //Implementación obligatoria del método abstracto
    area():number{
        return Math.PI * this.radio ** 2;
    }
}

/* class Rectangulo extends Figura {
    constructor(private ancho: number, private alto: number) {
        super();
    }

    area(): number {
        return this.ancho * this.alto;
    }
} */