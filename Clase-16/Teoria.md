# PASOS PARA INICIALIZAR UN SERVIDOR

## 1- inicializar un proyecto con node:

`node init -y`

## 2- INSTALAR EXPRESS

`npm install express`

> si se fijan aparece la carpeta node_modules

## 2- Crear estructura de carpetas y archivos

Estructura de carpetas:

```
-- public
--- css
--- img

-- src (aca va app.js)
--- views
---- aca van los archivos html
```

Creamos un archivo llamado app.js
este archivo se llama entry point, es el que se va a ejecutar siempre
primero en una aplicación de node.js
ya dejamos de pensar en archivos sino el proyectos.

## 3- cambiar el script

ingresamos al archivo package.json, chequear en main si esta app.js o index.js en los scripts vamos a hacer un cambio:

<pre><code>
"scripts": {
"start": "nodemon src/app.js"
},
</code></pre>

> recordar antes instalar el paquete nodemon: `npm install -g nodemon`
> Este paso se realiza una sola vez

## 4 - LEVANTAR EL SERVIDOR

### 4.1 - Requerir los paquetes a utilizar en el proyecto

```
const express = require("express");
const app = express();
const path = require("path");
```

### 4.2 Declarar los recursos estáticos (imagenes, css, etc)

`app.use(express.static("public"));`

### 4.3 Poner a escuchar el servidor

```
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000!"));
```

### 4.4 Manejo de rutas

```
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});
```

```
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/contacto.html"))
;});
```

> que es \_\_dirname??
>
> > dirname hace alusion al directorio actual
