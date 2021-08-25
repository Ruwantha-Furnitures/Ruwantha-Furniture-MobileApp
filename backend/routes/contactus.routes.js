const express = require("express");
const mysql = require("mysql");
const contactUsController = require("../controllers/other/contactus.controller");
const router = express.Router();

router.post("/", contactUsController);

module.exports = { contactUsRouter: router };
