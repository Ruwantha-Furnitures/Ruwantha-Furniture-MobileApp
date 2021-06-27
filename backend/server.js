//this is the server file

const express = require("express");
const app = express();

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ar_magic",
});

const {customerRouter}=require("./routes/customers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/customer",customerRouter);

async function connectDB() {
    try {
        await connection.connect();
        console.log("Connected to Database")
    } catch (error) {
        console.log("error")
    }
}

app.listen(3000, () => {
  console.log("Application is running on the port 3000");
  connectDB();
});
