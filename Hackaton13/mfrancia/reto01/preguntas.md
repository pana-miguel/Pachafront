# Hackaton 13 Reto 1

## 1.  ¿Por qué evitar los callbacks en las llamadas asíncronas?

Los callbacks son funciones de devolución de llamada utilizadas en programación asincrónica en JavaScript, pero pueden generar problemas de legibilidad y mantenibilidad debido al anidamiento excesivo. Esto lleva al "callback hell", donde los callbacks se anidan profundamente, dificultando el seguimiento del flujo del programa y el manejo de errores. Para evitar estos problemas, se recomienda utilizar alternativas modernas como promesas y async/await, que proporcionan una sintaxis más clara y estructurada para manejar operaciones asincrónicas.


## 2. ¿Qué es una promesa?

Una promesa en JavaScript es un objeto que representa el resultado pendiente de una operación asincrónica. Puede estar en tres estados: pendiente, cumplida o rechazada. Permite manejar el resultado exitoso o el error de una operación asincrónica de manera más estructurada y evitar el anidamiento excesivo de callbacks. Las promesas ofrecen métodos como then() y catch() para manejar el resultado o el error de forma más legible y mantenible.


## 3. ¿Qué es el callback hell?

El "callback hell" es una situación en programación asincrónica donde los callbacks anidados se vuelven complicados y difíciles de leer. Ocurre cuando hay múltiples callbacks anidados, lo que dificulta el seguimiento del flujo del programa y puede llevar a un código confuso y propenso a errores. Se recomienda evitarlo utilizando alternativas como promesas o async/await para una programación asincrónica más clara y estructurada.