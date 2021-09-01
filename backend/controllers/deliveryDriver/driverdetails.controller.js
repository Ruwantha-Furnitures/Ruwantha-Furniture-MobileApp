//driverdetails.controller.js file
//path : backend/controllers/customer.driverdetails.controller.js


const db = require("../../models");
const DeliveryDriver = db.deliveryDriver;


const getDeliveryDriverIdController = async (req, res) => {
  const { accID } = req.params;
  try {
    const result = await DeliveryDriver.findOne({
      where: { account_id: accID },
    });
    const deliveryDriverID = result.id;
    const availability = result.availability;
    console.log(deliveryDriverID);
    res.status(200).json({ deliveryDriverID, availability });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getDeliveryDriverDetailsController = async (req, res) => {
  const { driverID } = req.params;
  console.log(driverID);
  try {
    const deliveryDriverDetails = await DeliveryDriver.findOne({
      where: {
        id: driverID,
      },
    });
    res.status(200).json({ deliveryDriverDetails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const updateDriverAvailabilityController = async (req, res) => {
  const { driverID } = req.params;
  const { availability } = req.body;
  let availabilityStatus;
  if (availability === "Available") {
    availabilityStatus = 1;
  } else {
    availabilityStatus = 0;
  }
  console.log(driverID);
  console.log(availabilityStatus);
  try {
    const updateAvailability = await DeliveryDriver.update(
      {
        availability: availabilityStatus,
      },
      { where: { id: driverID } }
    );
    if (updateAvailability) {
      res
        .status(200)
        .json({ message: "Availability has been updated successfully" });
    } else {
      res.status(500).json({ message: "Availability has not been updated" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDeliveryDriverDetailsController,
  getDeliveryDriverIdController,
  updateDriverAvailabilityController,
};