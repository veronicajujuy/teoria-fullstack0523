const express = require("express");
const app = express();
const path = require("path");

// para decirle a express donde se encuentran nuestros archivos estaticos imagenes, css
app.use(express.static("public"));

app.listen(3000, () => "servidor escuchando en puerto 3000!");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});
app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/contacto.html"));
});
