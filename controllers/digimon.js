const Digimon = require("../db/models/Digimon");

module.exports = {
  index: (req, res) => {
    Digimon.find({}).then(digimon => {
      res.json(digimon);
    });
  },
  showName: (req, res) => {
    Digimon.findOne({ name: req.params.name.toLowerCase() }).then(digimon => {
      res.json(digimon);
    });
  },
  showByStage: (req, res) => {
    let search = req.params.stage.toLowerCase();
    let firstLetter = search[0].toUpperCase();
    search = firstLetter + search.slice(1);
    if (search[3] === "t") {
      firstLetter = search.substr(0, 3);
      search = firstLetter + "T" + search.slice(4);
    }
    Digimon.find({ stage: search }).then(digimon => res.json(digimon));
  },
  showByType: (req, res) => {
    let search = req.params.type.toLowerCase();
    let firstLetter = search[0].toUpperCase();
    search = firstLetter + search.slice(1);
    Digimon.find({ type: search }).then(digimon => res.json(digimon));
  },
  showByAttribute: (req, res) => {
    let search = req.params.attribute.toLowerCase();
    let firstLetter = search[0].toUpperCase();
    search = firstLetter + search.slice(1);
    Digimon.find({ attribute: search }).then(digimon => res.json(digimon));
  },
  create: (req, res) => {
    Digimon.create(req.body).then(digimon => res.json(digimon));
  },
  update: (req, res) => {
    let search = req.params.name.toLowerCase();
    let firstLetter = search[0].toUpperCase();
    search = firstLetter + search.slice(1);
    Digimon.findOneAndUpdate({ name: search }, req.body).then(digimon => {
      res.json(digimon);
    });
  },
  delete: (req, res) => {
    let search = req.params.name.toLowerCase();
    let firstLetter = search[0].toUpperCase();
    search = firstLetter + search.slice(1);
    Digimon.findOneAndDelete({ name: search }).then(digimon => {
      res.json(digimon);
    });
  }
};
