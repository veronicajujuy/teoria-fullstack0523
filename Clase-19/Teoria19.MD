# MODELO DE CAJA O BOX MODEL

Cualquier elemento de html se puede visualizar como una caja.

## Propiedades de box model

**Display:**

- Block
- Inline
- Inline-block

**Propiedades que se le pueden incorporar a block o inline-block**
**width: Alto**
Si un elemento de bloque no tiene declarada la propiedad width, el ancho será igual al 100% de su padre contenedor.
**height: Ancho**
Si un elemento no tiene declarada la propiedad height, el alto será igual a la altura que le proporcione su contenido.
Ambos pueden estar expresados en pixeles, porcentajes u otras unidades de medida

## Padding, Margin, Border

![Box Model](https://hablacode.org/static/media/Box-Model.ebc21d7b.PNG)

**Padding:**
Es el espacio de relleno que podemos agregar entre el contenido del elemento y su borde

```
div {
    padding: 12px /*padding para los 4 lados*/
}

div {
    padding: 12px 20px /* 12 px arriba y abajo 20px izq y derecha*/
}

div {
    padding: 12px 20px 18px/* 12 px arriba 20px izq y derecha 18px abajo*/
}

div {
    padding: 12px 20px 18px 21px /* 12 px arriba 20px derecha 18px abajo 21px izquierda*/
}

```

**Propiedades abreviadas**

```
div {
    padding: 15px;
}
/*es lo mismo que decir:*/
div {
    padding-top: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
}
```

**Border:**
Hace referencia al borde del elemento. Se ubica entre el contenido y el margen
Podemos asignarle estilo, espesor y color:

```
div{
    border: solid 3px black;
}
/*es lo mismo que decir*/

div{
    border-style: solid;
    border-color: black;
    border-width: 3px;
}
```

**Margin:**
Hace referencia al margen exterior del elemento. Sirve para separar una caja de la otra.

```
div {
    margin: 12px /*margen para los 4 lados*/
}

div {
    margin: 12px 20px /* 12 px arriba y abajo 20px izq y derecha*/
}

div {
    margin: 12px 20px 18px/* 12 px arriba 20px izq y derecha 18px abajo*/
}

div {
    margin: 12px 20px 18px 21px /* 12 px arriba 20px derecha 18px abajo 21px izquierda*/
}

```

## Box Sizing - Calculando el alto y el ancho

Para poder calcular al ancho o el alto total de un elemento, tenemos que sumar todas las propiedades que vimos..

Para evitar tener que sobre calcular un valor utilizamos una propiedad:

```
*{
    box-sizing: border-box;
}
```

## Medidas relativas

Cualquier medida expresada en porcentaje siempre estará relacionada con la medida del elemento padre que la contiene.
Si el contenedor padre mide 300px de ancho y le asignamos un 50% de ancho al elemento hijo este medirá 150px:

```
.contenedor{
    width: 300px
}
.elementoInterno {
    width: 50% // será 150px
}
```

## Medidas ems y rems

### Ems

Son relativos al elemento padre. Tomarán como valor de referencia la propiedad font-size.
El punto de referencia inicial es el valor del font-size del elemento <html>, que por defecto es 16px. Entonces 1em = 16px.

```
p{
    font-size: 1.5em; // 16px * 1.5 = 24px
    line-height: 2em; // 16px * 2 = 32px
    padding: 1.5em; //24px
}
```

sin embargo, si en alguna parte del documento le cambio la fuente a otro tamaño, por ejemplo un div que sea contenedor del p, cambiarán los tamaños:

```
div {
    font-size: 2em; // 32px
}
p{
    font-size: 1.5em; // 32px * 1.5 = 48px
    line-height: 2em; // 32px * 2 = 64px
    padding: 1.5em; //48px
}
```

### Rems

Los rems, funcionan muy parecido a los ems con la diferencia de que siempre tomaran de base al tamaño font-size del elemento <html>.
El tamaño expresado en rems, no modificará el de los elementos hijos ni se verán modificados por los del elemento padre.

> Por lo general es mejor utilizar **rems** en vez de **ems**

## Medidas de viewport

El viewport es el pspacio visible que tiene el navegador para mostrar el sitio.
**vw: vieport width - es relativo al ancho total del viewport**
**vh: vieport height - es relativo al alto total del viewport**
Estan expresadas en porcentajes del total porlo que **50vh** es 50% del alto disponible en el viewport.

```
div {
    width: 25vw; //25% del ancho disponible
    height: 50vh; // 50% del alto disponible
}
```

# DISEÑO ADAPTATIVO

Básicamente, el diseño o desarrollo adaptativo hace referencia a un conjunto
de reglas y métodos que se aplican a la estructura de un sitio web para lograr
que se adapte, de la mejor manera posible, a las distintas resoluciones de
salida. El objetivo es que el contenido del sitio se vea perfectamente desde
el punto de vista de los usuarios.

## Media Queries

Son un conjunto de reblas de CSS que nos permiten cambiar los estilos de los elementos en función de las características del dispositivo que esté visualizado en nuestro sitio.

### Min-width

Al especificar **min-width** estamos diciendo: _*Si como mínimo el viewport tiene N pixeles de ancho, apliquemos estas reglas*_
O, _*Desde este ancho hacia arriba*_

```
@media (min-width: 460px){
    ... // desde 460 para arriba
}
```

### Max-width

Al especificar **max-width** estamos diciendo: _*Si como máximo el viewport tiene N pixeles de ancho, apliquemos estas reglas*_
O, _*Desde este ancho hacia abajo*_

```
@media (max-width: 580px){
    ... // desde 580 para abajo
}
```

### Orientación

Al especificar la orientación, le agregamos al min o max width la posición del dispositivo, vertical u horizontal: **(ladscape o portrait)**

```
@media (max-width: 580px) and (orientation: landscapte){
    ... // desde 580 para abajo y la posición horizontal
}
```

## Estrategias de diseño

### Mobile first:

Para mobile first utilizamos estas medidas:

```
body {
    background: red;
}
@media (min-width: 460px){
    ....
}
@media (min-width: 768px){
    ....
}

```

### Breakpoints:

Los breakpoints o puntos de quiebre son los saltos en los cuales aplicamos una media query:
Ejemplos:

> 0-480: Smaller smartphones

> 481-768: Tablets and largest smartphones

> 769-1279: Laptops and largers tablets in landscapes, and smalls desktopos

> +1280: larger desktops and monitors
