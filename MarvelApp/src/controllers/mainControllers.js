const path = require("path");

const characters = require("../data/data");

const mainController = {
  showHome: (req, res) => {
    res.render("home", { characters, titulo: "Superheroes API" });
  },
  showContact: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/contacto.html"));
  },
  showRegitro: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/registro.html"));
  },
};

module.exports = mainController;
