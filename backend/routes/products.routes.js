const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  getAllProductsController,
  getOneProductController,
  getNewProductsController,
} = require("../controllers/products/products.controller");

const {
  getCategoriesController,
} = require("../controllers/products/categories.controller");

router.get("/", getAllProductsController);
router.get("/categories", getCategoriesController);
router.get("/newProducts", getNewProductsController);

module.exports = { productRouter: router };
