const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  LoginController,
  getCustomerIdContrller,
} = require("../controllers/customer/login.controller");

const {
  SignUpController,
} = require("../controllers/customer/signup.controller");

const {
  ViewProfileController,
} = require("../controllers/customer/viewprofile.controller");

const {
  UpdateProfileController,
} = require("../controllers/customer/updateprofile.controller");

const {
  getPurchasedProductsController,
  provideCustomerFeedbackController,
  getAllOrdersController,
} = require("../controllers/customer/purchasedproducts.controller");

router.post("/signup", SignUpController);
router.post("/login", LoginController);
router.get("/login/:accID", getCustomerIdContrller);
router.get("/viewprofile/:customerID", ViewProfileController);
router.put("/viewprofile/:customerID", UpdateProfileController);
router.get("/purchaseOrders/:customerID", getAllOrdersController);
router.get("/purchaseOrders/products/:orderID", getPurchasedProductsController);
router.post("/purchaseOrders/feedback", provideCustomerFeedbackController);

module.exports = { customerRouter: router };
