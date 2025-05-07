### Drag and Drop
Drag and Drop es el hecho de arrastrar (**drag**) y soltar (**drop**) un elemento (**draggable**) sobre otro elemento (**drop zone**) en una interfaz de usuario.

### Draggalbe
Para hacer un elemento arrastable, hay un atributo en HTML que se llama "draggable", añadiendolo a un elemento se convierte en un elmeneto que se puede arrastrar, para ello además deberá estar su valor en true
`draggable	Con el valor true, convierte el elemento en arrastrable.`

Ejemplo:

`<article id="hola" draggable="true">...`
Ahora este elmenento `<article>` es arrastable

Por defecto, algunos elementos como las imágenes ``<img>`` ya son arrastrables y no requieren este atributo, sin embargo, otras como un simple ``<div>`` no lo son.

Para converitr un elemento en arrastable desde TS, se puede hacer de la siguiente forma:
```
const dragItem = document.getElementById("hola") as HTMLElement;
dragItem.draggable = true;

```

### DropZone
Serán las áreas en las que se acepten elmentos arrastrados, esta require un `ondragover` + `event.preventDefault()` para permitri el drop. Además un `ondrop` para procesar los datos del elemento soltado.

```typescript
interface Dropzone {
  ondragover: (event: DragEvent) => void; // Permite soltar (preventDefault)
  ondrop: (event: DragEvent) => void; // Maneja el elemento soltado
}
```

### Eventos Drag & Drop
Para personalizar nuestro sistema Drag and Drop necesitamos utilizar ciertos eventos de Javascript. Primero hablaremos de los eventos de arrastre (Drag), luego de los eventos de soltar (Drop) y por último comentaremos el objeto .dataTransfer.


### C01: Variable para almacenar el elemento que se está arrastrando
Se declara una variable que guardará **temporalmente el elemento** que está siendo arrastrado.
Es `null` por defecdto porque aún no se ha arrastrado nada.
Se usa para que al momento del `drop` sepamos qué elemento mover

### C02: Seleccionar elementos que se pueden arrastrar
Esta línea hace que busca en el DOM todoso los elementos con la clase `.draggable`. Además se asume que esos `<div>` tienen el atributo de `draggable="true"` en el HTML. Luego, para cada uno, se les agrega un listener

#### `el.addEventListener("dragstart", (e) => {`:

Sin esta línea TS, se nos quejará diciendo: "*La propiedad 'dataTransfer' no existe en el tipo 'Event'*", debdio a esto es necesario realizar esta línea

- Lo que hace: Cuando alguien comience a arrastrar este elemento (`el`), ejecuta esta función
- Se activa cuando el usuario empieza a arrastrar un elemento.
- `e` es el evento DragEvent.
- (`e`): Esta es una función anonima que se ejectura cuando ocurre el eveneto `"draggstart"`
- `e`: Es una variable que representa el evento que ocrrurió. En este caso será un `DragEvent`.
- Cundo se empiece arrastrar (`dragstrat`), el navegador ejecuta la función, y pasa como parámetro el evento de arrastre, que el usuario captura como `e`.

Con `const even = ...` Almacenamos ese valor en una nueva constante `event`, pero ahora con el tipo correcto `DragEvent`, lo que nos permitirá acceder a propiedades especificas como `.dataTransfer`. 


#### `const event = e as DragEvent;`
Entonces, `e` es el objeto que representa el evento que ocurrión (el navegador lo pasó a la función automáticamente).

Luego `as DragEvent`: Le decimos a TS que `e` es enrealidad un `DragEvent,` un que el tipo por defecto puede ser solo Event. En TS será necesario dejarlo explicito



#### `draggedElement = el as HTMLElement;`:
- Se guarda en la variable `draggedElement` una referencia directa al elemento que se está arrastrando.
- El `as HTMLElement` indica al compilador de TS que el `el` es un elemento HTML válido.

#### `event.dataTransfer?.setData("text/plain", "");`
- Algunos navegadores (especialmente Firefox) requieren que se llame a setData() para que el drag funcione.
- Aunque no pasamos datos útiles aquí (cadena vacía), permite que el navegador sepa que se está arrastrando algo.

### C03: Zonas en donde soltar elementos
Con la línea: `document.querySelectorAll(".dropzone").forEach(zone => {`, le indicamos:
- Selecciona todos los elementos del DOM que tienen la clase `dropzone`
- Con el `.forEach(zone => { ... })` se le indica que recorra cada uno de esos elementos y que ejecute una función para asignarles eventos relacionados con el drop & drap
- `zone` será el nombre de la variable que se usará dentro de la función flecha (foreach) para luego poder referirse a cada uno de los elementos seleccionados por `document.querySelectorAll(".dropzone")`


```typescript
    zone.addEventListener("dragover", (e) => {
        e.preventDefault(); // Necesario para permitir el drop
    });
```
👆
Con está parte del código le digo a todos los elementos con clase `dropzone`, les estoy diciendo que cuando un elemento esté siento arrastrado sobre ellos (`dragover`), permitan que se suelte (`drop`) llamando a `preventDefault()`. Etonces: 
- `zone`: Es cada uno de los elementos con la clase `.dropzone` (por ejemplo, un `<article>` o `<section>` dondo se puede soltar elementos).
- Aquí el `dragover` es un evento que se dispara continuamente mientras un elemento arrastrable pasa por encima del contenedor (`zone`).
- `e.preventDefault()`: Por defecto, muchos navegadores *no permiten soltar elementos*. Llamar a `preventDefault()` aquí es **obligatorio** para que el `drop` funcione correctamente. (Si no se llama a preventDefault() en dragover, el evento drop nunca se disparará, aunque su listener esté definido.)


```typescript
    zone.addEventListener("drop", (e) => {
        e.preventDefault();      
```
👆
Con está línea estamos diciendo al navegador: "Oye, si alguien suelta un elemento dentro del contenedor (zone), haz alog". Ese algo es lo siguiente de las líneas de código.
- `zone` representa un contenedor donde se pueden soltar cosas, como por ejemplo un `<article>` o `<section>` con la clase .dropzone.`
- `addEventListener("drop", ...)` le está diciendo al navegador es: “Escucha si algo es soltado (drop) dentro de este elemento.”
- `drop`: Se activa cuando se suelta un elemento arrastrado encima del zone.
- `e.preventDefault()`: Se usa nuevamente para evitar cualquier comportamiento por defecto del navegador (como abrir un enlace si arrastras y sueltas uno, por ejemplo).


```typescript
        if (draggedElement) {
            zone.appendChild(draggedElement);
            draggedElement = null;
        }
```
👆
Con esas líneas se asegura que haya algo arrastrado (`draggedElement`), que lo mueve al nuevo contenedor(`zone`) y que **resetea** la variable dejándola en `null` para futuras operaciones.
- `if (draggedElement)`: Si `draggElemento` no es null ni undefined, haz esto...
- `if (draggedElement)`: Verifica si hay un elemento que se está arrastrando. Esta variable debería hacer sido definida globalmente antes del evento `dragstart`.
-`zone.appendChild(draggedElement)`: Mueve el elemento arrastrado al contenedor (`zone`) actual. Esto realiza el movimiento en el DOM. Entonces esto es lo que mueve visualemnte el elemento arrastrado (`draggesElement`) dentro del contenedor `zone`. Se hace uso del `appendChild` para colocarlo com hijo del elemento que actúa como zona de drop.
-`draggedElement = null`: Limpia la variable para evitar conflictos con futuros eventos de arrastre. por lo que hace más o menos esto: "Ya que terminamos de mover el elemento, limpiamos la variable `draggedElement` para que no siga apuntando a ese elemento".
- El uso del `draggedElement = null` es una buena práctica porqué evita errores si alguien intenta arrastrar de nuevo y la varible tiene un valor antiguo y permite que el sistema esté listo para un próxima operación de drag & drop limpia.

### C04: Comportamiento por Defecto (preventDefault())
El método `preventDefault()` evita el comportamiento por defecto de un evento en JS. En este caso del formulario, su comportamiento por defecto es:
- Recargar la página al hacer submit.
- Evitar los datos a la URL especificada en el atributo action

- Sin `prevent`: La páginas se recargaría inmediatemente despues del submit, borrando todos los datos en memoria y evitando que se ejecuten `addTask` y `rederTask`
- Con `prevent`: La página **no se recarga**, permitiendo que el código JS maneje los datos del formulario

### 05 Validación básica
El uso de esta línea es para que:
- El campo `title` no esté vacío (despues de eliminar los espacios con el `.trim`)
- Si está vacio (""), el código no continua, el `return` detiene la ejecución de la función.

### C06 Key Personalizada
En el localStorage nuestros datos almacenados poseen una `key`, lo ideal sería mantener una `key` personalizada

Este código posee una key `hardcodeada` directamente en los métodos:
```typescript
localStorage.setItem("task", JSON.stringify(this.tasks)); // ❌ Frágil (poco mantenible)
```

Una solución sería crearla de la siguiente forma:
```typescript
private static readonly STORAGE_KEY = "kanban_tasks"; // ✅ Key centralizada
```
Con este cambio:
- ünico punto de cambio: Si se necesita renombrar la key, se hace de un solo lugar.
- Legibilidad: Claridad sobre qué key se usa en toda la clase
- Evitar errores tipográficos: no se repita strings mágisocs ("tasks") en múltiples métodos. 

#### Convenciones para el nombre de una Key
- Especifico: Para una app evitar nombres genéricos como "data" o "tasks"
- Incluya versión: (ej: `_v1`) Si se esperan cambios futuros en la estructura de datos.
- Prefico único: si el sistema tiene multiples móduls (ej: kanban_tasks, kanban_settings)

Ejemplos de convenciones de nombre
```typescript
private static readonly STORAGE_KEY = "kanban_tasks_v1";  
private static readonly STORAGE_KEY = "myapp_tasks_2024";  
private static readonly STORAGE_KEY = "projectX_tasks";  
```

#### Key global o por usuario
Si el sistema maneja múltiples usuarios, se podría agregar un ID como `user_id`_
```typescript
export class TaskService {
    private readonly STORAGE_KEY: string; // Key dinámica

    constructor(userId: string) {
        this.STORAGE_KEY = `kanban_tasks_${userId}`; // Ej: "kanban_tasks_john123"
    }
}
```

### 

###