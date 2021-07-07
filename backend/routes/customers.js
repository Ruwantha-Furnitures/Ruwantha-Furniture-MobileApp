const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  LoginController,
} = require("../controllers/customer/LoginController");

const {
  SignUpController,
} = require("../controllers/customer/SignupController");
router.post("/signup", SignUpController);
router.post("/login", LoginController);

module.exports = { customerRouter: router };
