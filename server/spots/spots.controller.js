// spots.controller.js
const spotsService = require("./spots.service.js");

async function listSpots(req, res, next) {
  try {
    const spots = await spotsService.getSpots();
    res.json(spots);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listSpots,
};
