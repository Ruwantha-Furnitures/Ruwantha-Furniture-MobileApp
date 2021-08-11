const { Customer, Account } = require("../../models");
const sendEmail = require("../../common/sendEmail");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const SignUpController = async (req, res) => {
  const { firstName, lastName, email, password, address, contactNo } =
    req.body.data;
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
          res.json({
            message:
              "Account already exists,please try to Login with that account",
          });
        } else {
          const AccountDetails = await Account.create(accountData);
          const aid = AccountDetails.aid;

          const customerData = {
            aid,
            name,
            address,
            telephone: contactNo,
          };

          const CustomerDetails = await Customer.create(customerData);
          sendEmail(email);
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
