const Move = require("../db/models/Move");

module.exports = {
  index: (req, res) => {
    Move.find({}).then(moves => {
      res.json(moves);
    });
  }
};
