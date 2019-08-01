const mongoose = require('../connection');

const Digimon = new mongoose.Schema({
    name: String,
    skill: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill"
    },
    stage: String,
    type: String,
    attribute: String,
    degeneratesTo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Digimon"
        }
    ],
    digivoultion: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Digimon"
        }
    ]
})