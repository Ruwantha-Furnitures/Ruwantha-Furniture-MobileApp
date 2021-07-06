const { Account } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const saltrounds = 10;

const LoginController = async (req, res) => {
  const { password, userEmail } = req.body.data;
  const userlevel = 1;
  const data = { email: userEmail, userlevel };

  try {
    const account = await Account.findOne({ data });
    if (account === null) {
      res.json({
        auth: false,
        errorMessage:
          "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
      });
    } else {
      const existingPassword = account.password;
      bcrypt.compare(password, existingPassword, (error, result) => {
        if (result) {
          const userId=account.aid;
          const token=jwt.sign(userId,'jwtSecret')
          res.json({auth:true, token})
        } else {
          res.json({
            auth:false,
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
