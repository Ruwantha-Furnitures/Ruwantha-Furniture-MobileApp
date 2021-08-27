const db = require("../../models");
const DeliveryDriver = db.deliveryDriver;

const getDeliveryDriverIdController = async (req, res) => {
  const { accID } = req.params;
  console.log("delivery driver");
  try {
    const result = await DeliveryDriver.findOne({
      where: { account_id: accID },
    });
    const deliveryDriverID = result.id;
    console.log(deliveryDriverID);
    res.status(200).json({ deliveryDriverID });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDeliveryDriverDetailsController = async (req, res) => {
  const { driverID } = req.params;
  try {
    const deliveryDriverDetails = await DeliveryDriver.findOne({
      where: {
        id: deliveryDriverID,
      },
    });
    console.log(deliveryDriverDetails);
    res.status(200).json({ deliveryDriverDetails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDriverAvailabilityController = async (req, res) => {
  const { driverID } = req.params;
  const { availability } = req.body;
  try {
    const updateAvailability = await DeliveryDriver.update({
      availability,
      where: { id: deliveryDriverID },
    });
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

const getDriverDashboardInfoController = async (req, res) => {
  const { driverID } = req.params;
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getDeliveryDriverDetailsController,
  getDeliveryDriverIdController,
  updateDriverAvailabilityController,
  getDriverDashboardInfoController,
};
