const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const {
  LoginController,
} = require("../controllers/registration/LoginController");

const {
  SignUpController,
} = require("../controllers/registration/SignupController");
router.post("/signup", SignUpController);
router.post("/login", LoginController);

module.exports = { customerRouter: router };
