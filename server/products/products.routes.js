// routes/products.routes.js
const express = require("express");
const router = express.Router();
const controller = require("./products.controller.js");

router.get("/products", (req, res, next) => {
  return controller.getPublished(req, res, next);
});
router.get("/products/:slug", (req, res, next) => {
  controller.getPublishedBySlug(req, res, next);
});

module.exports = router;
