const { Customer, Account } = require("../../models");
const bcrypt = require("bcrypt");
const saltrounds = 10;

const ViewProfileController = async (req, res) => {
  const accountID = req.params.accID;
  try {
    const result = await Customer.findOne({ where: { aid: accountID } });
    const { name, address, telephone } = result;
    res.json({ name, address, telephone });
  } catch (error) {
    console.error(error);
  }
  //   console.log(typeOf(req.body.accID));
};

module.exports = { ViewProfileController };
