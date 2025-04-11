//Solo se usa LET y CONST

let nombreCompleto = "Dalpo";
console.log(nombreCompleto);
console.log(typeof nombreCompleto);

//Constante
const habitante = "Terricola"

//String
let pais: string = "Austria"

//Number (en TS se puden utilizar los _ para representar puntos, pero solo es para añadir una guía al código y no al resultado final)
let habitantes = 9_132_000;
console.log(habitantes)

let poblacion: number = parseInt("9132000");

//Boolean
let verdadero: boolean = false;

//Any
let cualquierCosa: any = "TS";
cualquierCosa = 12;
cualquierCosa = true;
cualquierCosa = "C#";

//Array
let lenguajes: string[] = ["JS", "TS", "PHP", "C#"]
let decadas: Array<number> = [90, 80, 60]

//Más de un tipo
let tallas: (string | number)[] = ["S", "XL", 16, 14]
let masTallas: Array<number|string> = ["M", "XLL", 12, 18]
let epocas: string|number|false = "60";

// TIPOS ESPECIALES
//Undefined
let sinDefinir: undefined = undefined;

let nula: null = null;


//Tipo Personalizado
type alfanumerico = string | number;
let nombreEdad: alfanumerico = "Diego";