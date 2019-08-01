const mongoose = require("../connection");

const Skill = new mongoose.Schema({
  name: String,
  Description: String
});

module.exports = mongoose.model("Skill", Skill);
