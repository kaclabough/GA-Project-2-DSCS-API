const Digimon = require("../db/models/Digimon");

module.exports = {
  index: (req, res) => {
    Digimon.find({}).then(digimon => {
      res.json(digimon);
    });
  }
};
