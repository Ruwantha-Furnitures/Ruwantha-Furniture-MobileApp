const db = require("../../models");
const Customer = db.customer;
const Account = db.account;
const online_customer = db.onlineCustomer;
const { signUpMail } = require("../../common/sendEmail");
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
        const existingStatus = await Account.findOne({ where: { email } });
        if (existingStatus) {
          console.log("exists");
          console.log(existingStatus);
          res.json({
            message:
              "Account already exists,please try to Login with that account",
          });
        } else {
          const AccountDetails = await Account.create(accountData);
          const aid = AccountDetails.id;

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
          const onlineCustomerDetails = await online_customer.create(
            onlineCustomerData
          );
          signUpMail(email);
          res.status(201).json({
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
