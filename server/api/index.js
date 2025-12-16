// index.js

const express = require("express");
const router = express.Router();

router.use(require("../products/products.routes"));
router.use(require("../hero/hero.routes"));
router.use(require("../spots/spots.routes"));

module.exports = router;
