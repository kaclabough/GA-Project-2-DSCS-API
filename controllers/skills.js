const Skill = require("../db/models/Skill");

module.exports = {
  index: (req, res) => {
    Skill.find({}).then(skills => {
      res.json(skills);
    });
  }
};
