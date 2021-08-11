const { Customer, Accounts, Online_Customer } = require("../../models");
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
      //account Data for the account Table
      const accountData = {
        email,
        password: hash,
        user_level: userlevel,
      };

      try {
        const existingStatus = await Accounts.findOne({ where: { email } });
        if (existingStatus) {
          console.log(existingStatus);
          res.json({
            message:
              "Account already exists,please try to Login with that account",
          });
        } else {
          const AccountDetails = await Accounts.create(accountData);
          const aid = AccountDetails.aid;

          //customer data for the customer table
          const customerData = {
            first_name: firstName,
            last_name: lastName,
            address,
            contact_number: contactNo,
          };

          const CustomerDetails = await Customer.create(customerData);

          //online customer details data for online customer table
          const onlineCustomerData = {
            customer_id: CustomerDetails.id,
            account_id: aid,
          };
          const onlineCustomerDetails = await Online_Customer.create(
            onlineCustomerData
          );
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
