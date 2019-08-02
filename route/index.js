const express = require("express");
const router = express.Router();

router.use("/", require("./application"));
router.use("/api/digimon", require("./digimon"));
router.use("/api/moves", require("./moves"));
router.use("/api/skills", require("./skills"));

module.exports = router;
