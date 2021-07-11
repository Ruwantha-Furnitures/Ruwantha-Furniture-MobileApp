const express = require("express");
const mysql = require("mysql");
const contactUsController = require("../controllers/other/ContactUsController");
const router = express.Router();

router.post("/", contactUsController);

module.exports = { contactUsRouter: router };
