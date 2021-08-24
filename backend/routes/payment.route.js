const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  getAllDistrictsChargesController,
  shippingDetailsController,
} = require("../controllers/products/payment.controller");

router.get("/deliveryCharges", getAllDistrictsChargesController);
router.post("/shippingDetails", shippingDetailsController);

module.exports = { paymentRouter: router };
