// spots.routes.js
const express = require("express");
const router = express.Router();
const spotsController = require("./spots.controller.js");

router.get("/spots", (req, res, next) => {
  return spotsController.listSpots(req, res, next);
});

module.exports = router;
