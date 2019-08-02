const express = require("express");
const router = express.Router();
const movesController = require("../controllers/moves");

router.get("/", movesController.index);
router.get("/name/:name", movesController.showName);
router.get("/type/:type", movesController.showByType);
router.get("/attribute/:attribute", movesController.showByAttribute);
router.post("/", movesController.create);
router.put("/:name", movesController.update);
router.delete("/:name", movesController.delete);

module.exports = router;
