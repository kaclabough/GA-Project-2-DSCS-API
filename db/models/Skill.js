const mongoose = require("../connection");

const Skill = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Skill", Skill);
