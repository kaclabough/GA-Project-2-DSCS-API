const mongoose = require('../connection');

const Skill = new mongoose.Schema({
    name: String,
    Description: String
})