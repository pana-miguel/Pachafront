# **Hackaton 13 Reto 01**

## **TÍTULO: Callbacks y promesas**

## **¿Por qué utilizar Promesas?**

### **EL PROBLEMA:**

Al escribir código asíncrono, tendremos que definir funciones que se ejecuten al finalizar
un proceso o una llamada asíncrona, a esto se les denomina callbacks, pero si
desarrollamos con este enfoque podremos caer en el problema del conocido callback
hell.
Para evitar el callback hell, podremos usar promesas para no anidar de manera tan
profunda.

## **PREGUNTAS:**

### **¿Por qué evitar los callbacks en las llamadas asíncronas?**

Los callbacks, especialmente cuando se anidan varios callbacks, pueden llevar a lo que se conoce como `"callback hell"` (infierno de callbacks), lo que puede dificultar la legibilidad y el mantenimiento del código. Además, si hay errores en los callbacks, pueden ser difíciles de depurar y pueden llevar a fugas de memoria si no se gestionan correctamente.

Con el avance de JavaScript, se han introducido nuevas características y enfoques para manejar la asincronía de manera más clara y concisa, como `Promesas` y `async/await`. Estas alternativas proporcionan una sintaxis más fácil de leer y entender, y permiten un flujo más lineal en el código.

Las Promesas son objetos que representan un valor futuro, y permiten encadenar operaciones asíncronas de una manera más legible mediante los métodos `then()` y `catch()`. Esto evita la anidación excesiva de callbacks y mejora la claridad del código.

El uso de `async/await` es otra opción popular. Es una forma de escribir código asíncrono que se asemeja a código síncrono, lo que facilita su lectura y comprensión. La palabra clave `async` se utiliza para declarar una función asíncrona, y `await` se utiliza dentro de la función para esperar la resolución de una `Promesa` sin bloquear la ejecución.


### **¿Qué es una promesa?**

Una promesa en JavaScript es un objeto que representa un valor futuro que puede estar disponible de manera asíncrona. Es una forma de manejar la asincronía y la ejecución de código que depende de operaciones asíncronas, como solicitudes de red, lectura de archivos o consultas a bases de datos.

- Una promesa puede estar en uno de los tres estados siguientes:

| **Pendiente (pending)** | **Resuelta (fulfilled)** | **Rechazada (rejected)**|
|-------------------------------------|-------------------------------------|-------------------------------------|
| Estado inicial cuando se crea una promesa. Significa que la operación aún no se ha completado. | Significa que la operación se completó con éxito y la promesa se resolvió con un valor resultante. | Significa que la operación no se pudo completar y la promesa se rechazó con una razón o un error. |

Para utilizar una promesa, se puede crear una instancia utilizando el constructor `Promise`. El constructor toma una función que recibe dos parámetros: `resolve` y `reject`. Dentro de esta función, se realiza la operación asíncrona y, al finalizar, se llama a `resolve` para resolver la promesa con un valor o a `reject` para rechazarla con un motivo.

Luego, se pueden encadenar métodos `then()` y `catch()` para manejar el resultado o los errores de la promesa. El método `then()` se utiliza para manejar el caso de éxito (cuando la promesa se resuelve) y recibe una función de retorno de llamada que toma el valor resuelto. El método `catch()` se utiliza para manejar el caso de error (cuando la promesa se rechaza) y recibe una función de retorno de llamada que toma el motivo del rechazo.


### **¿Qué es el callback hell?**

El "callback hell" (infierno de callbacks) es una situación que ocurre en JavaScript cuando se anidan múltiples callbacks dentro de otros callbacks, formando una estructura de código profundamente anidada y difícil de leer. Esto suele ocurrir en escenarios donde se manejan operaciones asíncronas mediante callbacks.

|**Código difícil de leer**|**Falta de legibilidad**|**Dificultad para el manejo de errores**|**Dificultad para el mantenimiento y la extensibilidad**|
|----------------------------|----------------------------|----------------------------|----------------------------|
| La estructura anidada de callbacks puede dificultar la comprensión del flujo del programa. A medida que aumenta la cantidad de callbacks anidados, el código se vuelve más difícil de seguir y comprender, lo que dificulta el mantenimiento y la depuración. | La lectura de código con múltiples niveles de anidamiento de callbacks puede resultar confusa y poco clara. Esto hace que el código sea menos legible y más propenso a errores. | Cuando hay múltiples niveles de callbacks, el manejo de errores puede volverse complicado. Cada callback necesita su propia lógica de manejo de errores, lo que puede llevar a una propagación confusa de errores y dificultar su detección y resolución. | El callback hell dificulta el mantenimiento del código y su extensión. Si se necesita agregar o modificar funcionalidades, el anidamiento excesivo de callbacks hace que sea más complicado realizar cambios sin introducir errores adicionales. |
