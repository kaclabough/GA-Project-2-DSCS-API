const Move = require("../db/models/Move");

module.exports = {
  index: (req, res) => {
    Move.find({}).then(moves => {
      res.json(moves);
    });
  },
  showName: (req, res) => {
    Move.findOne({ name: req.params.name.toLowerCase() }).then(move => {
      res.json(move);
    });
  },
  showByType: (req, res) => {
    let search = req.params.type.toLowerCase();
    let firstLetter = search[0].toUpperCase();
    search = firstLetter + search.slice(1);
    Move.find({ type: search }).then(move => res.json(move));
  },
  showByAttribute: (req, res) => {
    let search = req.params.attribute.toLowerCase();
    let firstLetter = search[0].toUpperCase();
    search = firstLetter + search.slice(1);
    Move.find({ attribute: search }).then(move => res.json(move));
  },
  create: (req, res) => {
    Move.create(req.body).then(move => res.json(move));
  },
  update: (req, res) => {
    let search = req.params.name.toLowerCase();
    Move.findOneAndUpdate({ name: search }, req.body).then(move => {
      res.json(move);
    });
  },
  delete: (req, res) => {
    let search = req.params.name.toLowerCase();
    Move.findOneAndDelete({ name: search }).then(move => {
      res.json(move);
    });
  }
};
