const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "armagic",
});

const getCustomersController = (req, res) => {
  db.query("SELECT * FROM customer", (error, result, fields) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
};

module.exports = { getCustomersController };
