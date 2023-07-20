## CASCADE STYLE SHEETS

# Enlazar un archivo css

Se enlaza en la etiqueta <head> del archivo html

```
<link rel="stylesheet" href="css/styles.css">
```

# Selectores

```
// selector de clase
.noticia {
    font-size: 22px
}
// selector de id
#saludo {
    color: blue
}
// selector de etiqueta
p {
    background-color: rgb(12, 34, 32)
}
// selectores combinados
h2.subtitulo {
    color: yellow
}
// selectores combinados y descendentes
ul#lista li {
    text-align: center
    }
```

# Fuentes

Las propiedades mas utlizadas son:

```
p {
    font-family: Arial, san-serif;
    font-size: 23px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    text-decoration: none; // para sacar el subrayado a los enlaces
    line-height: 20px // normalmente deberia ser 8px mas alto que el font-size
}
```

# Colores

Tipos de colores en css:

**Nombre**
Podemos buscar los nombres en esta pagina: [Picker](https://htmlcolorcodes.com/color-names/)

**Hexadecimal**
Ejemplo: #3459ff <br>
**RGB**
Ejemplo: rgb(12,34,32)<br>
**RGBA**
Ejemplo: rgba(12,35,22,0.5)<br>

# Mas colores:

- Color de un elemento: color
- Color de fondo: background-color
- Opacidad: opacity

# Fondos

- Color de fondo:
  ```
  p{
      background-color: #333;
  }
  ```
- Imagen de Fondo:
  ```
  body{
      background-image: url("./img/bici.jpg")
      background-repeat: repeat-x // las opciones son: no-repeat, repeat-x, repeat-y
      background-position: right top // el primero especifica el eje x y el segundo el eje y
      background-attachment: fixed // si se mueve con la pagina o no. puede ser fixed, scroll, inherit e initial
      background-size: 130px // tamaño de la imagen de fondo puede recibir, contain, cover, inherit, tamaños en pixeles y porcentajes
  }
  ```

# Definir nombres de variables:

```
:root {
    --azul: #454566;
    --texto-pequenio: 16px;
    etc
}
```

uso:

```
p {
    background-color: var(--azul);
}
```

## IMPORTAR FUENTES E ICONOS

# Importar fuentes:

1. Ir a la pagina:
   Google fonts: [Google fonts](https://fonts.google.com/)
2. Buscar la fuente que queramos
3. Agregar los estilos y tamaños que deseemos
4. Copiar en el archivo html la etiqueta link que nos da la pagina dentro del <head>
   ejemplo:

```
<head>
....
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,100;1,400;1,700&display=swap" rel="stylesheet">
</head>
```

Luego en el css utilizar la fuente:

```
p{
    font-family: 'Roboto', sans-serif;
}
```

# Importar iconos de fontawsome:

1. Buscar el CDN:
   Font Awsome: [https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)

2. Linkearlo en el head de la pagina html:

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

3. Buscar los iconos que queramos en esta pagina:
   [https://fontawesome.com/icons?d=gallery&m=free](https://fontawesome.com/icons?d=gallery&m=free)
4. Utilizarlo en HTML agregando por ejemplo para el icono del camion:

```
<i class="fa-solid fa-truck"></i>
```
