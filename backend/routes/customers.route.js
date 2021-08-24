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

router.post("/signup", SignUpController);
router.post("/login", LoginController);
router.get("/login/:accID", getCustomerIdContrller);
router.get("/viewprofile/:accID", ViewProfileController);
router.put("/viewprofile/:accID", UpdateProfileController);

module.exports = { customerRouter: router };
