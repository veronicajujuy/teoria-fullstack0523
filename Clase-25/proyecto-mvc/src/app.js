const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");
const usersRoutes = require("./routes/usersRoutes");
const app = express();
const PORT = 3000;

app.use(express.static("public")); // middlelware

app.use(mainRoutes);

app.use("/productos", productRoutes);

app.use("/users", usersRoutes);

app.listen(PORT || 3000, () => console.log(`escuchando en puerto ${PORT}`));
