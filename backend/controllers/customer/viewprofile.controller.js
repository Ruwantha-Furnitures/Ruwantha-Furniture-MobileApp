const db = require("../../models");
const Customer = db.customer;
const Account = db.account;
const OnlineCustomer = db.onlineCustomer;

const ViewProfileController = async (req, res) => {
  const customerID = req.params.customerID;
  try {
    const result = await Customer.findOne({
      where: { id: customerID },
    });
    const { first_name, last_name, address, contact_number } = result;
    const telephone = contact_number;
    res.json({ auth: true, first_name, address, telephone, last_name });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { ViewProfileController };
