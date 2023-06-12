# TÍTULO: Callbacks y promesas
***
Al escribir código asíncrono, tendremos que definir funciones que se ejecuten al finalizar
un proceso o una llamada asíncrona, a esto se les denomina callbacks, pero si
desarrollamos con este enfoque podremos caer en el problema del conocido callback
hell. Para evitar el callback hell, podremos usar promesas para no anidar de manera tan
profunda.
***
![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg)

***
## Preguntas:
1. *¿Por qué evitar los callbacks en las llamadas asíncronas?*

Evitar los callbacks en las llamadas asíncronas es importante porque el callback hell, también conocido como "infierno de los callbacks", puede ocurrir cuando se anidan múltiples llamadas asíncronas. Esto puede resultar en un código difícil de leer y mantener debido a la estructura en cascada de los callbacks. Además, los callbacks no proporcionan una forma fácil de manejar errores y pueden llevar a un código propenso a errores y difícil de depurar. Por lo tanto, para mejorar la legibilidad, mantenibilidad y manejo de errores en el código asíncrono, se recomienda utilizar alternativas como las promesas.

2. *¿Qué es una promesa?*

Una promesa es un objeto en JavaScript que representa la finalización eventual (éxito o fracaso) de una operación asíncrona y su valor resultante. Es una alternativa a los callbacks para trabajar con código asíncrono de manera más clara y estructurada. Una promesa puede estar en uno de los siguientes estados: pendiente (pending), cumplida (fulfilled) o rechazada (rejected). Al crear una promesa, se definen funciones para manejar la finalización exitosa (resolve) o el fallo (reject) de la operación asíncrona. Luego, se pueden encadenar métodos adicionales como then() y catch() para manipular el resultado o manejar errores.

3. *¿Qué es el callback hell?*

El callback hell (infierno de los callbacks) es un término que se refiere a la situación en la que múltiples callbacks anidados se vuelven difíciles de leer y mantener en el código. Sucede cuando se realizan múltiples operaciones asíncronas secuenciales, y cada una de ellas requiere un callback para manejar su resultado. A medida que se anidan más y más callbacks, el código se vuelve cada vez más complicado, difícil de seguir y propenso a errores. El callback hell dificulta la comprensión del flujo de ejecución del programa y puede hacer que el código sea difícil de depurar y mantener. Para evitar el callback hell, se utilizan enfoques alternativos como las promesas o async/await, que permiten escribir código asíncrono de forma más legible y estructurada.

***