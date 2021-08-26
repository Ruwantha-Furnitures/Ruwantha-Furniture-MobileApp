//this is the server file
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

const { customerRouter } = require("./routes/customers.routes.js");
const { productRouter } = require("./routes/products.route.js");
const { contactUsRouter } = require("./routes/contactus.routes.js");
const { cartRouter } = require("./routes/cart.routes.js");
const { paymentRouter } = require("./routes/payment.routes.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/armagic/api/customer", customerRouter);
app.use("/armagic/api/products", productRouter);
app.use("/armagic/api/contactus", contactUsRouter);
app.use("/armagic/api/cart", cartRouter);
app.use("/armagic/api/payments", paymentRouter);

const PORT = process.env.PORT;

connectDB();

async function connectDB() {
  try {
    await db.sequelize.sync();
    app.listen(PORT, () => {
      console.log("Application is running on the port 3002");
    });
  } catch (error) {
    console.log("error", error);
  }
}
