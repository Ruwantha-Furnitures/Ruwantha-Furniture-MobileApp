//this is the server file

const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const { customerRouter } = require("./routes/customers.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/customer", customerRouter);
connectDB();

async function connectDB() {
  try {
    await db.sequelize.sync();
    app.listen(3000, () => {
      console.log("Application is running on the port 3000");
    });
  } catch (error) {
    console.log("error");
  }
}
