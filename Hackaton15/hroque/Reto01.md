
  

# RETO 01

## TÍTULO: RESPONSABILIDAD DEL MANEJO DE RUTAS

Cuando creamos sistemas tendremos que definir rutas, estas rutas ejecutarán una funcionalidad, esta funcionalidad será un componente.

El enrutador será el encargado de definir las rutas y las funciones a ejecutarse. También nos ayudará con el direccionamiento a través de funciones para el manejo del historial.

A través del enrutador podremos definir rutas protegidas, donde cualquiera no podrá acceder. Los enrutadores son responsables de la definición de rutas y rutas anidadas, también podremos proteger las rutas y enviar parámetros a través de estas.

En Vue.js utilizamos vue-router.

  

***

  

## Preguntas

  

1.  **¿Cuáles son las responsabilidades de un manejador de rutas?**

  

- Definir rutas: El manejador de rutas permite definir las rutas de una aplicación web. Esto implica especificar la URL y el componente asociado que se debe cargar cuando se accede a esa URL en particular. Las rutas se definen generalmente mediante una sintaxis específica proporcionada por el manejador de rutas.

  

- Manejar el direccionamiento: El enrutador también se encarga de manejar el direccionamiento en la aplicación. Esto significa que es responsable de detectar los cambios en la URL y cargar el componente correspondiente según la ruta actual. Esto permite que la aplicación responda adecuadamente a las interacciones del usuario, cargando los componentes correctos en el momento adecuado.

  

- Gestión del historial: El manejador de rutas proporciona funciones y métodos para la gestión del historial de navegación. Esto permite al usuario moverse hacia adelante y hacia atrás en el historial del navegador, y al mismo tiempo asegura que la aplicación cargue los componentes correctos según la URL actual.

  

- Rutas anidadas: El enrutador permite la creación de rutas anidadas, lo que significa que se pueden definir rutas dentro de otras rutas. Esto es útil cuando se necesita representar jerarquías o estructuras de navegación más complejas en la aplicación.

  

- Protección de rutas: Un manejador de rutas también puede proporcionar funcionalidades para proteger ciertas rutas. Esto implica restringir el acceso a determinadas rutas o componentes, de modo que solo los usuarios autorizados puedan acceder a ellos. Esto es especialmente útil en aplicaciones que requieren autenticación o permisos específicos para acceder a ciertas secciones.

  

2.  **¿Para qué sirve un manejador de rutas?**

  

	El manejador de rutas es esencial para facilitar la navegación y la interacción del usuario en una aplicación web. Proporciona una capa de abstracción que permite definir las rutas y asociar componentes a ellas, gestionar el historial de navegación y proteger las rutas según sea necesario. Esto hace que el desarrollo de aplicaciones web sea más estructurado, modular y fácil de mantener.