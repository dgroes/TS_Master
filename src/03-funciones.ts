/* Definir una función en TS */
//Definir tipo de entrada y salida, y un valor por defecto
function getOpinion(opinion: string = "Neutral"):string {
    return "Mi opinión es: " + opinion
}

// getOpinion(2);
getOpinion("Positiva");

let miFuncion = (parametro:string):number => {
    return parseInt(parametro);
}

miFuncion("11");