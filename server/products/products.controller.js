// controllers/products.controller.js
const service = require("./products.service.js");

async function getPublished(req, res, next) {
  try {
    const products = await service.getPublishedProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
}

async function getPublishedBySlug(req, res, next) {
  try {
    const slug = req.params.slug;
    const product = await service.getPublishedProductBySlug(slug);
    res.json(product);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getPublished,
  getPublishedBySlug,
};
