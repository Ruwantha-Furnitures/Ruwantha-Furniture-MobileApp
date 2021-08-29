const db = require("../../models");
const SECRET_KEY = process.env.SECRET_KEY;
const PUBLISHABLE_KEY = process.env.PUBLISHABLE_KEY;
const stripe = require("stripe")(SECRET_KEY, { apiVersion: "2020-08-27" });
const DeliveryCharges = db.deliveryCharges;
const ShippingDetails = db.shippingDetails;
const Payments = db.payments;

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
  const {
    first_name,
    last_name,
    shipping_address,
    contact_number,
    charge_id,
    order_id,
  } = req.body.shppingDetailData;
  try {
    const shippingDetails = await ShippingDetails.create({
      order_id,
      first_name,
      last_name,
      shipping_address,
      contact_number,
      charge_id,
    });
    res.status(201).json({ message: "Your Shipping Details has been added" });
  } catch (error) {
    res.status(500).json({ message: "Error while Adding data" });
  }
};

const paymentsStoreController = async (req, res) => {
  const { order_id, total_amounts } = req.body.paymentDetailsData;
  console.log(req.body.paymentDetailsData);
  try {
    const paymentDetails = await Payments.create({ order_id, total_amounts });
    res.status(201).json({ message: "Your Payment Details has been add" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const paymentIntentController = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: "lkr",
      payment_method_types: ["card"],
    });
    console.log(paymentIntent);
    const client_secret = paymentIntent.client_secret;
    res.status(200).json({ client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPublishableKeyController = async (req, res) => {
  try {
    res.status(200).json({ PUBLISHABLE_KEY });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDistrictsChargesController,
  shippingDetailsController,
  paymentsStoreController,
  paymentIntentController,
  getPublishableKeyController,
};
