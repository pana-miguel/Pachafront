
# Cuestionario Hackaton #13!

## ¿Por qué evitar los callbacks en las llamadas asíncronas?

Los callbacks en las llamadas asíncronas pueden llevar a un problema conocido como "callback hell" o "infierno de callbacks". Este problema ocurre cuando se tienen múltiples llamadas asíncronas anidadas, lo que resulta en un código difícil de leer, mantener y depurar. El callback hell se caracteriza por una estructura de código en la que los callbacks están anidados dentro de otros callbacks, lo que puede generar una gran cantidad de sangría y hacer que el flujo del programa sea complicado de seguir.

## ¿Qué es una promesa?

Una promesa es un objeto en JavaScript que representa la eventual finalización (o fracaso) de una operación asíncrona y devuelve su resultado. En lugar de utilizar callbacks, las promesas permiten un manejo más estructurado y legible de las operaciones asíncronas.

Una promesa puede estar en uno de los siguientes estados:

*Pendiente (pending): El estado inicial de una promesa antes de que se cumpla o se rechace.
*Cumplida (fulfilled): La promesa se cumplió exitosamente y devuelve un valor.
*Rechazada (rejected): La promesa no se cumplió y devuelve un motivo o razón del rechazo.

Las promesas proporcionan métodos para adjuntar funciones de "resolución" y "rechazo", lo que permite manejar los resultados de manera más clara y evitar el callback hell.

## ¿Qué es el callback hell?

El callback hell (infierno de callbacks) es un patrón antiestético y difícil de leer que se produce cuando se anidan múltiples callbacks dentro de otros callbacks en el código asíncrono. Esto ocurre cuando hay una dependencia de resultados asíncronos anteriores para realizar operaciones adicionales.

El callback hell se caracteriza por una estructura de código con muchas indentaciones debido a las llamadas asíncronas anidadas, lo que dificulta la legibilidad y el mantenimiento del código. Además, el flujo del programa se vuelve difícil de seguir y comprender.

Este problema puede surgir cuando se utilizan callbacks tradicionales para manejar operaciones asíncronas en lugar de utilizar promesas o enfoques más modernos como async/await. El uso de promesas permite evitar el callback hell al proporcionar una forma más estructurada y legible de manejar las operaciones asíncronas.

## Gracias por leer
**Atte** , **Jean Pierre Ruiz**