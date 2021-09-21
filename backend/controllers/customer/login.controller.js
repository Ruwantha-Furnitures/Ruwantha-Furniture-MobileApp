require("dotenv").config;
const db = require("../../models");
const Account = db.account;
const online_customer = db.onlineCustomer;
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { createTokens, validateTokens } = require("../../middleware/auth");

const LoginController = async (req, res) => {
  const { password, userEmail } = req.body.data;
  const data = { email: userEmail };

  try {
    const account = await Account.findOne({
      where: { email: data.email, is_deleted: 0 },
    });
    console.log(account);
    if (account === null) {
      res.json({
        auth: false,
        errorMessage:
          "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
      });
    } else {
      const hashedPassword = account.password;
      const accountId = account.id;
      const userLevel = account.user_level;
      const passwordMatched = await bcrypt.compare(password, hashedPassword);
      if (!passwordMatched) {
        return res.json({
          auth: false,
          errorMessage:
            "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
        });
      } else {
        const accessToken = await JWT.sign(
          { userEmail, accountId },
          process.env.TOKEN_SECRET
        );

        res.status(200).json({
          auth: true,
          accessToken,
          userEmail,
          accountId,
          userLevel,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const getCustomerIdContrller = async (req, res) => {
  const accountId = parseInt(req.params.accID);
  try {
    const response = await online_customer.findOne({
      where: { account_id: accountId },
    });
    const customerId = response.customer_id;
    res.status(200).json({ customerId });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { LoginController, getCustomerIdContrller };
