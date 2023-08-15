const express = require("express");
const productController = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.get("/", productController.mostrarProductos);

productRoutes.get("/producto1", productController.mostrarProducto1);

module.exports = productRoutes;
