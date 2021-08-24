const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  getAllDistrictsChargesController,
  shippingDetailsController,
} = require("../controllers/products/payment.controller");

router.get("/deliveryCharges", getAllDistrictsChargesController);

module.exports = { paymentRouter: router };
