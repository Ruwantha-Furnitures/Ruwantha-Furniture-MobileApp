const { Customer, Account } = require("../../models");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const ViewProfileController = async (req, res) => {
  console.log(req.params.accID);
  //   console.log(typeOf(req.body.accID));
};

module.exports = { ViewProfileController };
