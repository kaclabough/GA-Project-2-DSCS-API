const mongoose = require("../connection");

const Digimon = new mongoose.Schema({
  name: String,
  skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Skill"
  },
  stage: String,
  type: String,
  attribute: String,
  degeneratesTo: [String],
  digivolvesTo: [String]
});

module.exports = mongoose.model("Digimon", Digimon);
