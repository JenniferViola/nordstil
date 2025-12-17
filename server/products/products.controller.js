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
    console.log("Controller: fetching product with slug:", req.params.slug);
    const slug = req.params.slug;
    const product = await service.getPublishedProductBySlug(slug);
    console.log("Controller: fetched product:", product);
    res.json(product);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getPublished,
  getPublishedBySlug,
};
