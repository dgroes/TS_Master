## Configuración de tsconfig.json
Para poder crear ficheros TS y que a la par se creen los ficheros en JS, será importante configurar lo siguiente `tsconfig.json`:
```
    "rootDir": "./src",      // Directorio raíz del código TypeScript
    "outDir": "./dist",      // Donde se guardarán los archivos JS compilados
    "strict": true           // Habilita todas las verificaciones estrictas de tipo
```

## C01: Exportación de clase
Para poder hacer uso de clases desde otros ficheros, con: `export class Task` se declara una clase y la **exporta**

## C02: Indicador de privado
Aunque en TS se tenga la palaba `private`, JS (hasta ES12) no soporta propiedades privadas reales en el código generado. El `_` es una **seña visual** para otros devs de que esa propiedad no debe usarse extermanete. Es una guiía Visual 👀 y una practica utilizada comunmente.


## C03: Declaración privada con valor inicial
- `private`: Indica que `_completed` solo puede ser accedida o modificada desde dentro de la clase **Task**. Si algo exteno intenta hacer ``task._completed = true` (fuera de la clase), TS lanzará un error.
- `completed: boolean`: Define que la propiedad es de tipo booleano (true o false).
- `false`: Asigna un valor inicial (false), lo que significa que toda nueva tarea creada estará incompleta por defecto.

## C04: Encapsulamineto
La propiedad `_complete` está encapsulada, es decir:
- No es accesible directamente desde fuera de la clase.
- Para interactuar con ella, la clase expone métodos públicos controlados:
    - `markAsCompleted()`: Cambia el estado a `true`.
    - `isCompleted()`: Devuelve el estado actual (solo lectura).

Con todo esto, además de lo mencionado en C03 nos aseguramos:
- El estado de completado sea privado.
- Su modificación pase por métodos diseñados para ello (`markAsComplete`).
- El valor inicial de toda tarea nueva sea `false`.

Es un patrón clásico para garantizar integridad y control en el estado de un objeto -> (valores actuales de sus propiedades en un momento determinado).