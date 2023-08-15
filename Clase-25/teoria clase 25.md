# Modelo Vista Controlador

En programación, no siempre existe un único camino para resolver un problema. Generalmente hay varios puntos de vista y, dependiendo de nuestros enfoques, podemos llegar al mismo resultado a través de diversos caminos.

Cuando nos vemos en la necesidad de trabajar en equipo y sobre un proyecto que escale quizás lo mejor sea estar alineado en conjunto con todo nuestro equipo de trabajo.

Es por esta razón que existen los patrones de diseño. Estos resuelven los problemas más comunes con los que nos encontramos al momento de programar, ya que proponen un camino bastante definido para llegar a destino.

Justamente de eso trata MVC: un patrón de diseño que busca resolver de una manera estándar el problema habitual de comunicación entre el front-end y el back-end de nuestra aplicación.

MVC hace referencia a las siglas: **Modelo, Vista y Controlador**. Y propone que cada uno de estos componentes resuelva y se encargue de una particularidad en específico, sin tomar atribuciones y responsabilidades de otros componentes.

estructura de archivos:

```
public
--css
--images
src
--controllers
(aca van los controladores)
-- views
(aca van las vistas)
-- routes
(aca van las rutas)
app.js

package.json
```

## Inicializando un proyecto con express

1 - Iniciar el proyecto: npm init -y
2 - instalar express: npm i express
3 - configurar package.json
4 - levantar el servidor
5 - crear las estructuras de archivos
6 - crear el sistema de ruteo
7 - crear los controladores
8 - agregar las rutas en el app.js
