const express = require("express");
const router = express.Router();
const movesController = require("../controllers/moves");

router.get("/", movesController.index);

module.exports = router;
