const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  getAllDistrictsChargesController,
  shippingDetailsController,
  paymentIntentController,
} = require("../controllers/products/payment.controller");

router.get("/deliveryCharges", getAllDistrictsChargesController);
router.post("/create-payment-intent", paymentIntentController);
router.post("/shippingDetails", shippingDetailsController);

module.exports = { paymentRouter: router };
