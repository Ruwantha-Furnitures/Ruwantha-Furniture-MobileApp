const nodemailer = require("nodemailer");
module.exports.signUpMail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "armagic24@outlook.com",
      pass: "armagic1234",
    },
  });

  const options = {
    from: "armagic24@outlook.com",
    to: email,
    subject: "Account has been created",
    html: `<h1>Thank you for creating new account,we are lookig forwar to having you and providing with you the best of services.</h1>`,
  };

  try {
    let info = await transporter.sendMail(options);
    // console.log(info.response);
  } catch (error) {
    console.log(error);
  }
};

module.exports.sendTokenMail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "armagic24@outlook.com",
      pass: "armagic1234",
    },
  });

  const options = {
    from: "armagic24@outlook.com",
    to: email,
    subject: "Password reset request",
    html: `<h4>If you requested a password reset for your account, use the confirmation code below to complete the process.</h4><br><br><b>${token}</b>`,
  };

  try {
    let info = await transporter.sendMail(options);
    // console.log(info.response);
  } catch (error) {
    console.log(error);
  }
};
