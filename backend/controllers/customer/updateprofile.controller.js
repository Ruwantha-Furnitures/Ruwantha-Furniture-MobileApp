const db = require("../../models");
const Customer = db.customer;
const bcrypt = require("bcrypt");
const saltrounds = 10;

const UpdateProfileController = async (req, res) => {
  const customerID = req.params.customerID;
  const { firstName, address, telephone, lastName } = req.body.data;
  try {
    const update = await Customer.update(
      {
        first_name: firstName,
        last_name: lastName,
        address,
        contact_number: telephone,
      },
      { where: { id: customerID } }
    );
    if (update >= 1) {
      res.json({
        status: "Successful",
        firstName,
        lastName,
        address,
        telephone,
      });
    } else {
      res.json({ status: "Unsuccessful" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { UpdateProfileController };
