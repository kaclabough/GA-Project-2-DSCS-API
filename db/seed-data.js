const Digimon = require("./models/Digimon");
const digimonData = require("./models/data/digimon.json");
const Move = require("./models/Move");
const moveData = require("./models/data/moves.json");
const Skill = require("./models/Skill");
const skillData = require("./models/data/skills.json");
const async = require("async");

function seed() {
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

  Skill.find({}).remove(
    () =>
      skillData.forEach(skill => {
        Skill.create({
          name: skill.name,
          description: skill.description
        });
      }),
    console.log("Skills seeded")
  );
}

function reference() {
  const digiReference = digimonData.map(digimon => {
    let temp = {
      skill: digimon.skill,
      degenerate: digimon.degeneratesTo,
      digivolution: digimon.digivolvesTo
    };
    return temp;
  });

  Digimon.find({}).then(digimons => {
    digimons.forEach((digimon, i) => {
      console.log(`skill name is ${digiReference[i].skill} and index is ${i}`);
      Skill.findOne({ name: digiReference[i].skill }).then(skill => {
        digimon.skill = skill._id;
        digimon.save();
        console.log(digimon);
      });
    });
  });
}
async.series(seed(), reference());
