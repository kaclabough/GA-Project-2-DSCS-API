const express = require("express");
const router = express.Router();
const digivice = require("../controllers/digimon");

router.get("/", digivice.index);
router.get("/name/:name", digivice.showName);
router.get("/stage/:stage", digivice.showByStage);
router.get("/type/:type", digivice.showByType);
router.get("/attribute/:attribute", digivice.showByAttribute);
router.post("/", digivice.create);
router.put("/:name", digivice.update);
router.delete("/:name", digivice.delete);

module.exports = router;
