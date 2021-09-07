const db = require("../../models");
const Customer = db.customer;
const Account = db.account;
const OnlineCustomer = db.onlineCustomer;

const DeleteProfileController = async (req, res, next) => {
  const { customerID, accountID } = req.params;
  try {
    const deleteCustomer = await Customer.update(
      { is_deleted: 1 },
      { where: { id: customerID } }
    );
    if (deleteCustomer) {
      const deleteAccount = await Account.update(
        { is_deleted: 1 },
        { where: { id: accountID } }
      );
      const deleteOnlineCustomer = await OnlineCustomer.update(
        { is_deleted: 1 },
        { where: { customer_id: customerID, account_id: accountID } }
      );
      res
        .status(200)
        .json({ message: "Your account has been deleted successfully" });
    } else {
      res.status(500).json({
        error: "Error occured while deleting the account please try again",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { DeleteProfileController };
