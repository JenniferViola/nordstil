// spots.repo.js
const db = require("../data/db");

function findSpots() {
  const stmt = db.prepare("SELECT * FROM spots");

  return stmt.all();
}

module.exports = {
  findSpots,
};
