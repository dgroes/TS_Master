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

## C05: Aserción de Tipo
En TS `as HTMLFormElement` es un type assertion (aserción de tipo), que le indica al compilador que trate el resultado de por ejemplo: `document.getElementById("task-form")` como un elemento de tipo `HTMLFormElement` y no como un `HTMLElement` genérico.

### Porqué usarlo
- **TS no sabe el tipo exacto del elemento**: `document.getElementById` retorna un tipo genérico `HTMLElement` (la clase base de todos los elementos del DOM), pero si sabes que el elemento ID `task-form` es un `<form>`, se necesita decirle a TS que lo trate como tal para acceder a propiedades/métodos especificos de un formulario.

- **Acceder a porpiedades/métodos especificos**: Un `HTMLFormElement` tiene propiedades como `.element`, `.submit()`, `.reset()`, etc., que no existe en un `HTMLElement` genérico. Con la aserción, TS permite usarlas sin errores de tipo

## C06: Task y TaskServer
*Comentario extenso **no** presente en el código*
### Qué representa Cada Cosa
- Task.ts, es un Model y Representa la estructura de una tarea: id, titulo, descripción, si está completada o no.

- TaskService.ts, es un Service y Se encarga de la lógica de negocio: agregar tareas, guardarlas, cargarlas, eliminarlas. 

`Task` es el modelo de dato: Cómo es una tarea.
`TaskService` no es un controller, pero es similar a lo que sería un Service en una arquitectura tipo MVC.

### En un MVC Más real:
**Rol**                         **Equivale aquí**
Model (modelo)                  `Task.ts`
Service (servicio)              `TaskService.ts`
Controller (controlador)        El `main.ts` (sería un "controller" pequeño)

### Explicación más visual
```
[Usuario]
  ↓ (input, clic)
[HTML + Eventos DOM]  ←→ (controller: main.ts)
  ↓ llama a
[TaskService] (lógica)
  ↓ crea/guarda
[Task] (modelos de datos)


```
- El usuario interactúa con el formulario
- El controlador (main.js) escucha eventos (submit) y decide qué hacer (agregar tarea, eliminar, etc).
- El servicio (TaskService) realiza las operaciones (guardar, cargar, eliminar) delas tareas reales.
- El modelo (Task) es el objeto que representa los datos.

### TaskService más a fondo
`TaskService` organiza toda la lógica de manejar tareas.
En `main.ts` solo se usa acciones simples (`addTask()`, `deleteTask()`, `getTask()`), sin repetir la lógica en todas partes.
(Principio de "**Single Responsability**": Cada parte hace solo una cosa)

## C07: Service
*Comentario extenso **no** presente en el código*

- Un `Service` (Servicio) es una clase que se encarga de hacer operaciones o manejar lógica relacionada a un modelo.
- No representa "datos" (eso sería `Task`).
- No representa "interfaz de usuario" (esos sería HTML/DOM).
- Un service trabaja como un ayudante o herramienta para la app.

### Nombre para la clase service
- El agregar Service a por ejemplo `TaskService` da a entender que es una clase que "sirve" o "gestiona" coasa de las tareas (Task)

- Otros posibles nombres también sería válidos:
    - TaskManager
    - TaskController
    - TaskHandler
    - TaskRepository (si maneja acceso a BD)
    - TaskHelper
Aun así `Service` es el más usado para lógicas de negocio simples.

##