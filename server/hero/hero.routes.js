// hero/hero.routes.js
const express = require("express");
const router = express.Router();
const heroController = require("./hero.controller");

router.get("/hero", heroController.getHero);

module.exports = router;
