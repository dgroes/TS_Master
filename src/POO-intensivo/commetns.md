## C01: Inicializar
Cuando creamos una Clase y dentro de ella por ejemplo tenemos los siguiente:
```
class Animal {
    nombre: string; // ❌ Error: No está inicializada
}
```

La propiedad no tiene un valor por defecto, TS prevé que podría leerse como `undefined` en algún momento (riesgo de errores en runtime). Por lo que será importande asignarle un valor

Para solucionar esto se puede hacer de la siguiente forma:
#### Asignación al incicializarla:
```
class Animal {
    nombre: string = ""; // Valor por defecto (string vacío)
}
```

### Asignación en un constructor:
```
class Animal {
    nombre: string;
    
    constructor(nombre: string) {
        this.nombre = nombre; // ✅ Asignación en constructor
    }
}
```

## C02: Inferencia de argumentos
Ahora cuando creamos un nuevo Objeto en base a una Clase, TS con su "inferencia" sabrá en el ejemplo del "Animal" cuantos argumentos debería recibir para que se pueda crear el Objeto, por lo que si no le pasos dichos argumentos dirá:

*Se esperaban 2 argumentos, pero se obtuvieron 0.ts(2554)
main.ts(8, 17): 

No se proporcionó ningún argumento para "nombre"*

## C03: Métodos protegidos
La línea `animal01.condicionMedia()` dará el siguiente error: 

*La propiedad condicionMedia está protegida y solo se puede acceder a ella en la clase Animal y las subclases de esta.*

Esto es un coportamiento espardo debido al modificador `protected` que posee el método.

Un método o propiedad `protected` solo puede ser accedido:
- Dentro de la clase donde está definido (en este caso, Animal)
- Desde clases hijas

```
Comparación con otros modificadores:

Modificador	¿Accesible desde la clase?	¿Desde subclases?	¿Desde instancias?
public	            Sí	                        Sí	                Sí
protected	        Sí	                        Sí	                ❌
private	            Sí	                        ❌	               ❌
```

### En este caso poqué falla exacamente el código:
- Se está intentando acceder a `condigiconMedica()` desde una instancia (animal01), pero `protected` no lo permite.
- Soluación: Se debe usar `protected` cuando se quiere que un método se accesible solo internamente o por clases hijas