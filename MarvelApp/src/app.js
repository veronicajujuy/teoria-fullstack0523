const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", "./src/views");
// para decirle a express donde se encuentran nuestros archivos estaticos imagenes, css
app.use(express.static("public"));

app.use(mainRouter);

app.listen(3000, () => console.log("servidor escuchando en puerto 3000!"));
