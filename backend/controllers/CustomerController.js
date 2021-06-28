const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "armagic",
});

const getCustomersController = (req, res) => {
  // response.sendStatus(200);
  console.log(req.body.data);
  const email = req.body.data.email;
  const password = req.body.data.password;
  const userLevel = "Customer";
  const accountRegQuery =
    "INSERT INTO account(email,password,userlevel) VALUES(?,?,?)";
  db.query(accountRegQuery, [email, password, userLevel], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};

module.exports = { getCustomersController };
