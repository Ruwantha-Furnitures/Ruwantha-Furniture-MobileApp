require("dotenv").config
const { Account } = require("../../models");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { createTokens, validateTokens } = require("../../middleware/auth");

const LoginController = async (req, res) => {
  const { password, userEmail } = req.body.data;
  const data = { email: userEmail};

  try {
    const account = await Account.findOne({
      where: { email: data.email},
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
      bcrypt.compare(password, existingPassword,async (error, result) => {
        if (result) {
          try {
            const accessToken = await JWT.sign({userEmail,accountId},process.env.TOKEN_SECRET)
            res.cookie("access-token", accessToken, {
              maxAge: 60 * 60 * 24 * 30 * 1000,
            });
            console.log("Login successful")
            console.log(accessToken)
            res.json({ auth: true, accessToken, userEmail, accountId });
          } catch (error) {
            console.log(error)
          }
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
