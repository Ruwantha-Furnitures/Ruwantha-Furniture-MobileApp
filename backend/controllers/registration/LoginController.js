const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "armagic",
});

const LoginController = (req, res) => {
  const { password, userEmail } = req.body.data;

  const selectQuery = "SELECT * FROM account WHERE email=?";
  db.query(selectQuery, [userEmail], (error, result) => {
    const hashedPassword = result[0].password;
    bcrypt.compare(password, hashedPassword, (errdecrypt, resultdecrypt) => {
      if (resultdecrypt) {
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
  });
};

module.exports = { LoginController };
