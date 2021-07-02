const { Customer, Account } = require("../../models");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const SignUpController = async (req, res) => {
  const { name, email, password, address, contactNo } = req.body.data;
  const userlevel = 1;

  bcrypt.hash(password, saltrounds, async (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      const accountData = {
        email,
        password: hash,
        userlevel,
      };

      try {
        const AccountDetails = await Account.create(accountData);
        const aid = AccountDetails.aid;

        const customerData = {
          aid,
          name,
          address,
          telephone: contactNo,
        };

        const CustomerDetails = await Customer.create(customerData);
        console.log(CustomerDetails.name);
      } catch (error) {
        console.log(error);
      }
    }
  });
};

module.exports = { SignUpController };
