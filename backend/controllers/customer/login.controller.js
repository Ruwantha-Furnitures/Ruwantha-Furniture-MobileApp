require("dotenv").config;
const { Accounts } = require("../../models");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { createTokens, validateTokens } = require("../../middleware/auth");

const LoginController = async (req, res) => {
  console.log("run");
  const { password, userEmail } = req.body.data;
  const data = { email: userEmail };

  try {
    const account = await Accounts.findOne({
      where: { email: data.email },
    });
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
      console.log(userLevel);
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
        return res
          .status(200)
          .json({ auth: true, accessToken, userEmail, accountId, userLevel });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { LoginController };
