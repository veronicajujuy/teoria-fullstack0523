const express = require("express");
const mainController = require("../controllers/mainController");
const mainRoutes = express.Router();

mainRoutes.get("/", mainController.mostrarHome);

mainRoutes.get("/contacts", mainController.mostrarContactos);

module.exports = mainRoutes;
