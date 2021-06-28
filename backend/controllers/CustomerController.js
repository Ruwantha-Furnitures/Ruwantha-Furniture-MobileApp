const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "armagic",
});

const getCustomersController = (req, res) => {
  const name = req.body.data.name;
  const email = req.body.data.email;
  const password = req.body.data.password;
  const address = req.body.data.address;
  const contactNo = req.body.data.contactNo;
  const userLevel = "Customer";
  const accountRegQuery =
    "INSERT INTO account(email,password,userlevel) VALUES(?,?,?)";
  const customerRegQuery =
    "INSERT INTO customer(aid,name,address,telephone) VALUES(?,?,?,?)";
  db.query(accountRegQuery, [email, password, userLevel], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      const accountID = res.insertId;
      db.query(
        customerRegQuery,
        [accountID, name, address, contactNo],
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Successfully Registered");
          }
        }
      );
    }
  });
};

module.exports = { getCustomersController };
