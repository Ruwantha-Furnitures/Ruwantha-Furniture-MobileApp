const { Customers, Accounts, online_customers } = require("../../models");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const ViewProfileController = async (req, res) => {
  console.log("API Called");
  const accountID = req.params.accID;
  console.log(accountID);
  try {
    const getCusID = await online_customers.findOne({
      where: { account_id: accountID },
    });
    const { customer_id } = getCusID;
    console.log(customer_id);
    const result = await Customers.findOne({ where: { id: customer_id } });
    const { first_name, address, contact_number } = result;
    const telephone = contact_number;
    res.json({ auth: true, first_name, address, telephone });
  } catch (error) {
    console.error(error);
  }
  //   console.log(typeOf(req.body.accID));
};

module.exports = { ViewProfileController };
