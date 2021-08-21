const express = require("express");
const router = express.Router();
const {
  AddToCartController,
  UpdateCartController,
  DeleteCartController,
} = require("../controllers/products/cart.controller");
router.post("/addToCart", AddToCartController);

module.exports = { cartRouter: router };
