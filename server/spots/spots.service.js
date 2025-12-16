// spots.service.js
const spotsRepo = require("./spots.repo.js");

function getSpots() {
  return spotsRepo.findSpots();
}

module.exports = {
  getSpots,
};
