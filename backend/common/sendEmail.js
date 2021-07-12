const nodemailer = require("nodemailer");
module.exports = async (email) => {
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
    subject: "Create Account",
    html: "<h1>Thank you for creating your account</h1>",
  };

  try {
    let info = await transporter.sendMail(options);
    // console.log(info.response);
  } catch (error) {
    console.log(error);
  }
};
