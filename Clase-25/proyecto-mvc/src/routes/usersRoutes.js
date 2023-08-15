const express = require("express");
const userController = require("../controllers/userController");

const usersRoutes = express.Router();

usersRoutes.get("/", userController.mostrarUsuarios);

module.exports = usersRoutes;
