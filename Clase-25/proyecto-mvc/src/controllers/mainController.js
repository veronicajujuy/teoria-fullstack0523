const mainController = {
  mostrarHome: (req, res) => {
    res.send("estamos en el home");
  },
  mostrarContactos: (req, res) => {
    res.send("contactos");
  },
};

module.exports = mainController;
