const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "armagic",
});

const SignUpController = (req, res) => {
  const { name, email, password, address, contactNo } = req.body.data;
  const userLevel = 1;
  const accountRegQuery =
    "INSERT INTO account(email,password,userlevel) VALUES(?,?,?)";
  const customerRegQuery =
    "INSERT INTO customer(aid,name,address,telephone) VALUES(?,?,?,?)";
  bcrypt.hash(password, saltrounds, (err, hash) => {
    if (err) {
      console.log("error");
    } else {
      db.query(accountRegQuery, [email, hash, userLevel], (errorAcc, resultAcc) => {
        if (errorAcc) {
          console.log(errorAcc);
        } else {
          const accountID = resultAcc.insertId;
          db.query(
            customerRegQuery,
            [accountID, name, address, contactNo],
            (errorCus, resultCus) => {
              if (errorCus) {
                res.send({
                  state:"Unsuccessful",
                  message:"An Error Occured",
                })
              } else {
                res.send({
                  state:"Successful",
                })
              }
            }
          );
        }
      });
    }
  });
};

module.exports = { SignUpController };
