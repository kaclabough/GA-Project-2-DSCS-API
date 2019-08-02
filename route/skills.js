const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skills");

router.get("/", skillController.index);
router.get("/id/:id", skillController.showId);
router.get("/name/:name", skillController.showName);
router.post("/", skillController.create);
router.put("/:name", skillController.update);
router.delete("/:name", skillController.delete);
module.exports = router;
