const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  getAllDistrictsChargesController,
  shippingDetailsController,
  paymentIntentController,
  getPublishableKeyController,
} = require("../controllers/products/payment.controller");

const {
  orderDetailsController,
  sellProductsController,
} = require("../controllers/products/order.controller");
router.get("/deliveryCharges", getAllDistrictsChargesController);
router.post("/create-payment-intent", paymentIntentController);
router.get("/publishableKey", getPublishableKeyController);
router.post("/shippingDetails", shippingDetailsController);
router.post("/orders", orderDetailsController);
router.post("/sellProducts", sellProductsController);

module.exports = { paymentRouter: router };
