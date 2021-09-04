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
  DeleteProfileController,
} = require("../controllers/customer/deleteprofile.controller");

const {
  UpdateProfileController,
} = require("../controllers/customer/updateprofile.controller");

const {
  getPurchasedProductsController,
  provideCustomerFeedbackController,
  getAllOrdersController,
} = require("../controllers/customer/purchasedproducts.controller");

const {
  messageController,
} = require("../controllers/customer/message.controller");

const {
  recoverPasswordController,
  resetPasswordController,
} = require("../controllers/customer/forgotpassword.controller");

router.post("/signup", SignUpController);
router.post("/login", LoginController);
router.get("/login/:accID", getCustomerIdContrller);
router.get("/viewprofile/:customerID", ViewProfileController);
router.put("/viewprofile/:customerID", UpdateProfileController);
router.get("/purchaseOrders/:customerID", getAllOrdersController);
router.get("/purchaseOrders/products/:orderID", getPurchasedProductsController);
router.post("/purchaseOrders/feedback", provideCustomerFeedbackController);
router.post("/message", messageController);
router.post("/passwordRecovery", recoverPasswordController);
router.post("/passwordRecovery/resetPassword", resetPasswordController);
router.put("/deleteProfile/:customerID/:accountID", DeleteProfileController);

module.exports = { customerRouter: router };
