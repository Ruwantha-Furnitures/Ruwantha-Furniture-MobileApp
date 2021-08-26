const db = require("../../models");
const Customer = db.customer;
const Account = db.account;
const OnlineCustomer = db.onlineCustomer;

const ViewProfileController = async (req, res) => {
  console.log("API Called");
  const customerID = req.params.customerID;
  console.log(customerID);
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
  //   console.log(typeOf(req.body.accID));
};

module.exports = { ViewProfileController };
