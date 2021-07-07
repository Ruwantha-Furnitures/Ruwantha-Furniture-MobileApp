const { Customer, Account } = require("../../models");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const SignUpController = async (req, res) => {
  console.log("req");
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
        const existingStatus = await Account.findOne({ where: { email } });
        if (existingStatus) {
          console.log("User Exists");
          res.json({ message: "Your User Account has been already exists" });
        } else {
          console.log("User doesn't exist");

          const AccountDetails = await Account.create(accountData);
          const aid = AccountDetails.aid;

          const customerData = {
            aid,
            name,
            address,
            telephone: contactNo,
          };

          const CustomerDetails = await Customer.create(customerData);
          res.json({
            state: "Successful",
            message: "User has been successfully registered",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
};

module.exports = { SignUpController };
