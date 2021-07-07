//this is the server file

const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const { customerRouter } = require("./routes/customers.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/armagic/api/customer", customerRouter);
connectDB();

async function connectDB() {
  try {
    await db.sequelize.sync();
    app.listen(3002, () => {
      console.log("Application is running on the port 3002");
    });
  } catch (error) {
    console.log("error");
  }
}
