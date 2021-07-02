const { Account } = require("../../models");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const LoginController = async (req, res) => {
  const { password, userEmail } = req.body.data;
  const userlevel = 1;
  const data = { email: userEmail, userlevel };

  try {
    const account = await Account.findOne({ data });
    if (account === null) {
      res.send({
        state: "Error",
        errorMessage:
          "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
      });
    } else {
      const existingPassword = account.password;
      bcrypt.compare(password, existingPassword, (error, result) => {
        if (result) {
          res.send({
            state: "Successful",
            message: "Login Succcessful",
          });
        } else {
          res.send({
            state: "Error",
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
