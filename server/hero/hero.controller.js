// hero/hero.controller.js
const heroService = require("./hero.service");

function getHero(req, res, next) {
  try {
    const hero = heroService.getActiveHero();
    res.json(hero);
  } catch (err) {
    next(err);
  }
}

module.exports = { getHero };
