const dishes = require("../data/data");

const mainControllers = {
  showIndex: (req, res) => {
    res.render("index");
  },
  showDetalle: (req, res) => {
    const id = req.params.id; // 1
    const dish = dishes.find((item) => item.id == id);

    console.log(dish);
    res.render("detalleMenu", { dish: dish });
  },
};

module.exports = mainControllers;
