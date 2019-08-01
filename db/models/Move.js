const mongoose = require('../connection');

const Move = new mongoose.Schema({
    name: String,
    type: String,
    attribute: String,
    description: String
})

module.exports = mongoose.model("Move", Move);