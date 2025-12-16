// hero/hero.service.js
const heroRepo = require("./hero.repo");

function getActiveHero() {
  return heroRepo.findActiveHero();
}

module.exports = { getActiveHero };
