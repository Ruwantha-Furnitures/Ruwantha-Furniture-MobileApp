const db = require("../../models");
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

module.exports = {
  getAllDistrictsChargesController,
  shippingDetailsController,
};
