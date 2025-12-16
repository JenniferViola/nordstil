// services/products.service.js
const repo = require("./products.repo.js");

function getPublishedProducts() {
  return repo.findPublished();
}

function getPublishedProductBySlug() {
  return repo.findPublishedBySlug();
}

module.exports = {
  getPublishedProducts,
  getPublishedProductBySlug,
};
