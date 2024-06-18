const express = require("express");
const controller = require("../Help_requestController.js");
const router = express.Router();


router.get("/", controller.getAll);

router.get("/filter", controller.filtering);

router.get("/IVolunteer", controller.IVolunteer);

router.get("/:id", controller.getById);

router.post("/NewVolunteer/", controller.createNewVolunteer);

router.post("/", controller.insert);

router.put("/:id", controller.update);

router.delete("/:id", controller.delete);

module.exports = router;
