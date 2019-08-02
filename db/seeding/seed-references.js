const Digimon = require("../models/Digimon");
const digimonData = require("../models/data/digimon.json");
const Skill = require("../models/Skill");

const digiReference = digimonData.map(digimon => {
  let temp = {
    skill: digimon.skill
    // degeneratesTo: digimon.degeneratesTo
    // digivolvesTo: digimon.digivolvesTo
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

// Digimon.find({}).then(digimons => {
//   digimons.forEach((digimon, i) => {
//     if (digiReference[i].degeneratesTo !== null) {
//       digiReference[i].degeneratesTo.forEach(degeneration => {
//         console.log(degeneration);
//         Digimon.find({ name: degeneration }).then(degen => {
//           console.log(degen);
//           console.log(digimon);
//         });
//       });
//     }
//   });
// });

// Digimon.find({}).then(digimons => {
//   digimons.forEach((digimon, i) => {
//     if (digiReference[i].digivolvesTo !== null) {
//       digiReference[i].digivolvesTo.forEach(digivolution => {
//         console.log(digivolution);
//         Digimon.findOne({ name: digivolution }).then(digivolution => {
//           digimon.digivolvesTo.push(digivolution._id);
//         });
//       });
//       console.log(digimon);
//     }
//     digimon.save();
//   });
// });
