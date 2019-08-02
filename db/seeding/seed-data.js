const Digimon = require("../models/Digimon");
const digimonData = require("../models/data/digimon.json");
const Move = require("../models/Move");
const moveData = require("../models/data/moves.json");
const Skill = require("../models/Skill");
const skillData = require("../models/data/skills.json");

Digimon.find({}).remove(
  () =>
    digimonData.forEach(digimon => {
      Digimon.create({
        name: digimon.digimon.toLowerCase(),
        stage: digimon.stage,
        type: digimon.type,
        attribute: digimon.attribute,
        degeneratesTo: digimon.degeneratesTo,
        digivolvesTo: digimon.digivolvesTo
      });
    }),
  console.log("Digimon seeded")
);

Move.find({}).remove(
  () =>
    moveData.forEach(move => {
      Move.create({
        name: move.move.toLowerCase(),
        type: move.type,
        attribute: move.attribute,
        description: move.description
      });
    }),
  console.log("Moves seeded")
);

Skill.find({}).remove(
  () =>
    skillData.forEach(skill => {
      Skill.create({
        name: skill.name.toLowerCase(),
        description: skill.description
      });
    }),
  console.log("Skills seeded")
);
