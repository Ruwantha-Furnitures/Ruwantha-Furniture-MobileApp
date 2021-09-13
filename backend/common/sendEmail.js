const nodemailer = require("nodemailer");
module.exports.signUpMail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ucscarmagic@gmail.com",
      pass: "TYPucsc123",
    },
  });

  const options = {
    from: "ucscarmagic@gmail.com",
    to: email,
    subject: "Account has been created",
    html: `<h4>Thank you for creating new account,we are lookig forwar to having you and providing with you the best of services.Also if you want to preview the products through Augmented Reality, download the Image which has given below and take a hard copy of it </h4>
    <a href='https://drive.google.com/file/d/1rLOdqUpsGY-tCpy_X-nYINiSaDJ6PJpc/view?usp=sharing'>This is the link for the user manual</a>
    <a href='https://drive.google.com/file/d/18TgtaRj3JwszLkAwQ9jj2LzBt27mWE_T/view?usp=sharing'>This is the link for the AR Image template</a>`,
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
    service: "gmail",
    auth: {
      user: "ucscarmagic@gmail.com",
      pass: "TYPucsc123",
    },
  });

  const options = {
    from: "ucscarmagic@gmail.com",
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
