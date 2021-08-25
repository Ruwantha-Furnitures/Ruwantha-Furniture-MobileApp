const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  getAllDistrictsChargesController,
  shippingDetailsController,
  paymentIntentController,
  getPublishableKeyController,
} = require("../controllers/products/payment.controller");

router.get("/deliveryCharges", getAllDistrictsChargesController);
router.post("/create-payment-intent", paymentIntentController);
router.get("/publishableKey", getPublishableKeyController);
router.post("/shippingDetails", shippingDetailsController);

module.exports = { paymentRouter: router };
