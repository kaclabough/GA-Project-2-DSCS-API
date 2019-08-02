const Digimon = require("../models/Digimon");
const digimonData = require("../models/data/digimon.json");
const Skill = require("../models/Skill");

const digiReference = digimonData.map(digimon => {
  let temp = {
    skill: digimon.skill
  };
  return temp;
});

console.log(digiReference);

Digimon.find({}).then(digimons => {
  digimons.forEach((digimon, i) => {
    Skill.findOne({ name: digiReference[i].skill.toLowerCase() }).then(
      skill => {
        digimon.skill = skill._id;
        digimon.save();
      }
    );
  });
});
