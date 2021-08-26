const express = require("express");
const router = express.Router();
const {
  AddToCartController,
  UpdateCartController,
  DeleteCartController,
  GetCartItemsController,
  GetCartInitialTotalAmountController,
} = require("../controllers/products/cart.controller");

const {
  getOneProductController,
} = require("../controllers/products/products.controller");

router.get("/totalAmount", GetCartInitialTotalAmountController);
router.get("/:customerId", GetCartItemsController);
router.post("/addToCart", AddToCartController);
router.get("/getProduct/:productId", getOneProductController);
router.put("/updateCartProduct/:productId/:customerId", UpdateCartController);
router.delete("/deleteCartProduct/:cartId", DeleteCartController);
module.exports = { cartRouter: router };
