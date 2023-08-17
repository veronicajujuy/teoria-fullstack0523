const express = require("express");
const mainControllers = require("../controllers/mainControllers");

const mainRouter = express.Router();

mainRouter.get("/", mainControllers.showIndex);

mainRouter.get("/detalle/:id", mainControllers.showDetalle);

module.exports = mainRouter;
