const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  getAllProductsController,
  getOneProductController,
} = require("../controllers/products/products.controller");

router.get("/", getAllProductsController);

module.exports = { productRouter: router };
