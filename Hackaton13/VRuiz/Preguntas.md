# Reto 1:
## TÍTULO: Callbacks y promesas

###  ¿Por qué utilizar Promesas?
- Al escribir código asíncrono, tendremos que definir funciones que se ejecuten al finalizar un proceso o una llamada asíncrona, a esto se les denomina callbacks, pero si desarrollamos con este enfoque podremos caer en el problema del conocido callback hell.
Para evitar el callback hell, podremos usar promesas para no anidar de manera tan profunda.

## PREGUNTAS:

<span style="color:skyblue">1. *¿Por qué evitar los callbacks en las llamadas asíncronas?*</span>

- Los callbacks en las llamadas asíncronas han sido una forma común de manejar la respuesta de una operación asincrónica. Aquí hay algunas razones por las que se sugiere evitar los callbacks en las llamadas asíncronas:

1. **Complejidad y legibilidad del código:* El uso extensivo de callbacks puede conducir a un código anidado complejo y difícil de leer.

2. **Dificultad para el manejo de errores:* El manejo de errores en una cadena de callbacks puede volverse complicado y propenso a errores. Esto puede llevar a un código engorroso y difícil de mantener.

3. **Falta de estructura:* Los callbacks no proporcionan una estructura clara para el flujo del programa.

4. **Dificultad para el manejo de concurrencia:* El uso de callbacks puede complicar el manejo de la concurrencia y la sincronización.


<span style="color:skyblue">2. *¿Qué es una promesa?*</span>

- Una promesa es un objeto en la programación asíncrona que representa la eventual finalización o falla de una operación asincrónica. Proporciona una forma más estructurada y fácil de manejar el flujo de trabajo en comparación con los callbacks. una promesa es un contenedor para un valor que puede estar disponible de inmediato o en el futuro. Puede estar en uno de los siguientes estados:

1. *Pendiente (pending):* La promesa está en espera de ser cumplida o rechazada.

2. *Cumplida (fulfilled):* La promesa se ha cumplido y el valor esperado está disponible.

3. *Rechazada (rejected):* La promesa ha sido rechazada debido a un error y no se ha obtenido el valor esperado.

<span style="color:skyblue">3. *¿Qué es el callback hell?*</span>

- El "callback hell" (infierno de callbacks) es un término que se utiliza para describir una situación en la programación donde se anidan múltiples callbacks de manera excesiva y se vuelve difícil de leer, mantener y razonar sobre el código. 





