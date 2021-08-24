const db = require("../../models");
const DeliveryCharges = db.deliveryCharges;

const getAllDistrictsChargesController = async (req, res) => {
  try {
    const deliveryCharges = await DeliveryCharges.findAll();
    console.log(deliveryCharges);
    res.status(200).json({ deliveryCharges });
  } catch (error) {
    res.status(500).json({ message: "Error while retrieving payment Details" });
  }
};

const shippingDetailsController = async (req, res) => {};

module.exports = {
  getAllDistrictsChargesController,
  shippingDetailsController,
};
