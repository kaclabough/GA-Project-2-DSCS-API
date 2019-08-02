const Skill = require("../db/models/Skill");

module.exports = {
  index: (req, res) => {
    Skill.find({}).then(skills => {
      res.json(skills);
    });
  },
  showId: (req, res) => {
    Skill.findOne({ _id: req.params.id }).then(skills => {
      res.json(skills);
    });
  },
  showName: (req, res) => {
    Skill.findOne({ name: req.params.name.toLowerCase() }).then(skill => {
      res.json(skill);
    });
  },
  create: (req, res) => {
    Skill.create(req.body).then(skill => res.json(skill));
  },
  update: (req, res) => {
    let search = req.params.name.toLowerCase();
    Skill.findOneAndUpdate({ name: search }, req.body).then(skill => {
      res.json(skill);
    });
  },
  delete: (req, res) => {
    let search = req.params.name.toLowerCase();
    Skill.findOneAndDelete({ name: search }).then(skill => {
      res.json(skill);
    });
  }
};
