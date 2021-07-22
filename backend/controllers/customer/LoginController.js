const { Account } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createTokens, validateTokens } = require("../../middleware/auth");
const saltrounds = 10;

const LoginController = async (req, res) => {
  const { password, userEmail } = req.body.data;
  const userlevel = 1;
  const data = { email: userEmail, userlevel };

  try {
    const account = await Account.findOne({
      where: { email: data.email, userlevel: 1 },
    });
    if (account === null) {
      res.json({
        auth: false,
        errorMessage:
          "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
      });
    } else {
      const existingPassword = account.password;
      const accountId = account.aid;
      bcrypt.compare(password, existingPassword, (error, result) => {
        if (result) {
          const accessToken = createTokens(account);
          res.cookie("access-token", accessToken, {
            maxAge: 60 * 60 * 24 * 30 * 1000,
          });
          console.log("Login successful")
          res.json({ auth: true, accessToken, userEmail, accountId });
        } else {
          res.json({
            auth: false,
            errorMessage:
              "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { LoginController };
