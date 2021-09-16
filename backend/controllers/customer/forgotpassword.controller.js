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
      where: { email, is_deleted: 0 },
    });

    if (cusAccountExists && (cusAccountExists.user_level === 1 || 3)) {
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
  let saltrounds = 10;
  try {
    const compare = await Token.findOne({ where: { email, token: code } });
    if (compare) {
      bcrypt.hash(password, saltrounds, async (err, hash) => {
        const updatePassword = await Account.update(
          { password: hash },
          { where: { email } }
        );
        try {
          const deleteToken = await Token.destroy({ where: { email } });
          res
            .status(200)
            .json({ message: "Your password has been reset successfully" });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Please try again!" });
        }
      });
    } else {
      console.log("error");
      console.log(error);
      res
        .status(500)
        .json({ message: "You have entered a wrong code, please try again!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const changePasswordController = async (req, res) => {
  const { password, newPassword, email } = req.body;
  let saltrounds = 10;
  try {
    const account = await Account.findOne({
      where: { email, is_deleted: 0 },
    });
    const hashedPassword = account.password;
    const passwordMatched = await bcrypt.compare(password, hashedPassword);
    if (passwordMatched) {
      bcrypt.hash(newPassword, saltrounds, async (err, hash) => {
        const updatePassword = await Account.update(
          { password: hash },
          { where: { email } }
        );
        try {
          res
            .status(200)
            .json({ message: "Your password has been changed successfully" });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Please try again!" });
        }
      });
    } else {
      res.status(500).json({ message: "Your entered password does not match" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  recoverPasswordController,
  resetPasswordController,
  changePasswordController,
};
