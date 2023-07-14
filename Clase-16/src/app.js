// LEVANTAR EL SERVIDOR

// 1. requerimos los paquetes para levantar el servidor
const express = require("express");
const app = express();

const path = require("path");

// 2. Poner a escuchar el servidor

app.listen(3000, () => console.log("Servidor esuchando en el puerto 3000!"));

//2.1. Definir donde se encuentran nuestros archivos estaticos

app.use(express.static("public"));

// 3. crear rutas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/contacto.html"));
});
