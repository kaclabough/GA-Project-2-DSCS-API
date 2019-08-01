const express = require("express");
const router = express.Router();
const digivice = require("../controllers/digimon");

router.get("/", digivice.index);

module.exports = router;
