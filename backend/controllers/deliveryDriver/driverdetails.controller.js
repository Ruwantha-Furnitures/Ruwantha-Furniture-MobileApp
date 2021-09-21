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
    res.status(200).json({ deliveryDriverID, availability });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDeliveryDriverDetailsController = async (req, res) => {
  const { driverID } = req.params;
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

//for the testing purposes
const addDriverController = async (req, res) => {
  const { firstName, lastName, email, password, contactNo, address } =
    req.body.data;
  const userlevel = 3;
  const availability = 1;
  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        //account Data for the account Table
        const accountData = {
          email,
          password: hash,
          user_level: userlevel,
        };

        const AccountDetails = await Account.create(accountData);
        const aid = AccountDetails.id;
        //driver data for the driver table
        const driverData = {
          first_name: firstName,
          last_name: lastName,
          telephone: contactNo,
          availability,
          account_id: aid,
          address,
        };

        const DriverDetails = await DeliveryDriver.create(driverData);
        if (DriverDetails) {
          res.status(200).json({ message: "Driver account added" });
        } else {
          res.status(500).json({ message: "Driver account could not created" });
        }
      }
    });
  } catch (error) {}
};

module.exports = {
  getDeliveryDriverDetailsController,
  getDeliveryDriverIdController,
  updateDriverAvailabilityController,
  addDriverController,
};
