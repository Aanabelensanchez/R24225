El proposito del trabajo es crear una pagina que cumpla con las caracteristicas de las entregas>
Requerimientos (clase 8):
Estructura HTML.
Formulario de contacto.
Contenido multimedia.
Navegabilidad.
Estilos CSS.
Uso de estilos básicos en los diferentes estructuras del proyecto.
Diseño responsivo con flexbox y grids.
Subida al servidor.
Github, github pages o cualquier servidor gratuito.
Obtuve la informacion de los productos de la siguiente API:https://fakestoreapi.com/products que pude ver que cumplia con las condiciones establecidas para luego, en el avance del curso podamos consumirla y asi completar la entrega final.
En la pagina de PRODUCTOS.HTML consumi la api fakestoreapi.
Lo que no pude solucionar es en el index.html que el carrousel me traiga las primeras tres imagenes de los productos de la API- QUEDA LA PRIMERA FIJA, entiendo que debe ser por esta parte
  <!-- cardCarouselDiv.className = `carousel-item ${index === 0 ? 'active' : ''}`; 
 --> pero no se como que se cambie automatizadamente..

Hice dos archivos js:
El primero llamado promesa.js contiene todo lo que es el carrito 
el segundo llamado scripthtml.js  que contiene todo lo relativo  a carousel ya que como no me quedo bien queria separarlo para que lo puedan ver diferenciado con lo otro.


El resultado final es el ingreso de la pagina por la solapa index.html donde vemos el carrousel, luego la solapa productos donde se pueden agregar productos y sale un mensaje de que el producto es agregado, luego se suma en el carrito del navbar, y yendo al logo del carrito podras ver todo lo agregafo (que se conserva en el localStorage) y tambien se puede eliminar, hasta dejar el carrito vacio, cosa que saldra el mensaje diciendo el carrito se encuentra vacio. en caso de que se quiera confirmar la compra se podra aprtar en el boton finalizar compra, luego de haber visto el total del monto de la compra (que suma todos los productos almacenados en el localstorage) y al apretar el boton de finalizar saldra un alert que dice que la compra esta finalizada y que en el mail llegara el detalle del envio.

## Instalación

Instrucciones paso a paso sobre cómo instalar el proyecto localmente. Por ejemplo:

c
```bash
git clone https://github.com/usuario/.gitd 
npm install

mi pagina de git> https://github.com/Aanabelensanchez/R24225