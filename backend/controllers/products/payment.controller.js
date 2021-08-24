const db = require("../../models");
const SECRET_KEY = process.env.SECRET_KEY;
const stripe = require("stripe")(SECRET_KEY, { apiVersion: "2020-08-27" });
const DeliveryCharges = db.deliveryCharges;
const ShippingDetails = db.shippingDetails;
const getAllDistrictsChargesController = async (req, res) => {
  try {
    const deliveryCharges = await DeliveryCharges.findAll();
    console.log(deliveryCharges);
    res.status(200).json({ deliveryCharges });
  } catch (error) {
    res.status(500).json({ message: "Error while retrieving payment Details" });
  }
};

const shippingDetailsController = async (req, res) => {
  console.log(req.body);
  const {
    first_name,
    last_name,
    shipping_address,
    contact_number,
    charge_id,
    order_id,
  } = req.body.data;
  try {
    const shippingDetails = await ShippingDetails.create({
      order_id,
      first_name,
      last_name,
      shipping_address,
      contact_number,
      charge_id,
    });
    console.log(shippingDetails);
    res.status(200).json({ message: "Your Shipping Details has been added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while Adding data" });
  }
};

const paymentIntentController = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "LKR",
      payment_method_types: ["card"],
    });
    const clientSecret = paymentIntent.client_secret;
    res.status(200).json({ clientSecret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDistrictsChargesController,
  shippingDetailsController,
  paymentIntentController,
};
