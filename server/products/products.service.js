// services/products.service.js
const repo = require("./products.repo.js");

function getPublishedProducts() {
  return repo.findPublished();
}

function getPublishedProductBySlug(slug) {
  console.log("Service: fetching product by slug from repo");
  return repo.findPublishedBySlug(slug);
}

module.exports = {
  getPublishedProducts,
  getPublishedProductBySlug,
};
