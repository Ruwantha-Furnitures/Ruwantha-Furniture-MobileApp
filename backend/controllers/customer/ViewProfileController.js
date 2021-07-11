const { Customer, Account } = require("../../models");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const ViewProfileController = async (req, res) => {
  console.log(req.body);
  //   console.log(typeOf(req.body.accID));
};

module.exports = { ViewProfileController };
