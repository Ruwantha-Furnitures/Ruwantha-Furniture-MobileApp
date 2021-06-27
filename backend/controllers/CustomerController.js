const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ar_magic",
  });

const getCustomersController=(req,res) => {
    connection.query("SELECT * FROM customer",(error,result,fields)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
        }
    })
}

module.exports={getCustomersController}