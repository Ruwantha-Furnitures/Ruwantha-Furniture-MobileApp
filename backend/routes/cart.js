const express = require("express");
const router = express.Router();
const {
  AddToCartController,
  UpdateCartController,
  DeleteCartController,
} = require("../controllers/customer/cart.controller");
router.post("/addToCart", AddToCartController);

module.exports = { cartRouter: router };
