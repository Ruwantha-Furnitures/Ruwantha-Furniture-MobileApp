const express = require("express");
const router = express.Router();
const {
  AddToCartController,
  UpdateCartController,
  DeleteCartController,
  GetCartItemsController,
} = require("../controllers/products/cart.controller");

const {
  getOneProductController,
} = require("../controllers/products/products.controller");

router.get("/:customerId", GetCartItemsController);
router.post("/addToCart", AddToCartController);
router.get("/getProduct/:productId", getOneProductController);

module.exports = { cartRouter: router };
