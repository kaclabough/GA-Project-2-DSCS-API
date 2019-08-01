const Digimon = require("./models/Digimon");
const digimonData = require("./models/data/digimon.json");
const Move = require("./models/Move");
const moveData = require("./models/data/moves.json");
const Skill = require("./models/Skill");
const skillData = require("./models/data/skills.json");

Digimon.find({}).remove(
  () =>
    digimonData.forEach(digimon => {
      Digimon.create({
        name: digimon.digimon,
        stage: digimon.stage,
        type: digimon.type,
        attribute: digimon.attribute,
        degeratesTo: [],
        digivolution: []
      });
    }),
  console.log("Digimon seeded")
);

Move.find({}).remove(
  () =>
    moveData.forEach(move => {
      Move.create({
        name: move.name,
        type: move.type,
        attribute: move.attribute,
        description: move.description
      });
    }),
  console.log("Moves seeded")
);

Skill.find({}).remove(() =>
  Skill.collection
    .insertMany(skillData)
    .then(skill => {
      console.log("Skills seeded");
    })
    .catch(err => {
      console.log(err);
    })
);
