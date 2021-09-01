const db = require("../../models");
const randomstring = require("randomstring");
const bcrypt = require("bcrypt");
const { sendTokenMail } = require("../../common/sendEmail");
const Account = db.account;
const Customer = db.customer;
const Token = db.resetToken;

const recoverPasswordController = async (req, res) => {
  const { email } = req.body;
  try {
    const cusAccountExists = await Account.findOne({
      where: { email, user_level: 1 },
    });
    if (cusAccountExists) {
      const token = randomstring.generate({ length: 7, charset: "alphabetic" });
      const addToken = await Token.create({ email, token });
      sendTokenMail(email, token);
      res.status(200).json({
        message: "Token has been successfully send to your email account",
      });
    } else {
      res.status(500).json({ message: "There isn't any existing account" });
    }
  } catch (error) {
    console.log(error);
  }
};

const resetPasswordController = async (req, res) => {
  const { code, password, email } = req.body;
  console.log(email, code);
  let saltrounds = 10;
  try {
    const compare = await Token.findOne({ where: { email, token: code } });
    if (compare) {
      bcrypt.hash(password, saltrounds, async (err, hash) => {
        const updatePassword = await Account.update(
          { password: hash },
          { where: { email } }
        );
        const deleteToken = await Token.delete({ where: { email } });
        res
          .status(200)
          .json({ message: "Your password has been reset successfully" });
      });
    } else {
      console.log("error");
      res
        .status(500)
        .json({ message: "You have entered a wrong code, please try again!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  recoverPasswordController,
  resetPasswordController,
};
