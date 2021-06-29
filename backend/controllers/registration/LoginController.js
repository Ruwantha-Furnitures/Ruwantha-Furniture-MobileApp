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
  bcrypt.hash(password, 10, (err, hash) => {
    const selectQuery = "SELECT * FROM account WHERE email=? AND password=?";
    db.query(selectQuery, [userEmail, hash], (error, result) => {
      console.log(hash);
      if (result.lenght > 0) {
        console.log(result);
      } else {
        console.log("No User");
        res.send({
          errorMessage:
            "There isn't any existing user with that login credentials, please enter your email and password again",
        });
      }
    });
  });
};

module.exports = { LoginController };
