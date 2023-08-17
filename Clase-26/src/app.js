const express = require("express");
const mainRouter = require("./routes/mainRoutes");
const app = express();
const PORT = 3040;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));

app.use(mainRouter);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
