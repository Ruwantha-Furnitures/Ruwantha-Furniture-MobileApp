const Op = require("sequelize").Op;
const moment = require("moment");
const db = require("../../models");
const Deliveries = db.deliveries;
const Order = db.order;
const ShippingDetails = db.shippingDetails;
const SellProduct = db.sellProduct;
const Product = db.product;

//getting the all orders for today
const getAllOrdersForDayController = async (req, res) => {
  const { driverID } = req.params;
  const day = moment().date();
  const orderDetails = [];
  try {
    //find all the deliveries assigned
    const allOrders = await Deliveries.findAll({
      where: {
        delivery_driver_id: driverID,
        request_status: 1,
      },
    });
    for (let i = 0; i < allOrders.length; i++) {
      const { order_id, complete_status } = allOrders[i];

      //check whether individual  order is two days before today where the customer has placed there order
      const orderWithTwoDays = await Order.findOne({
        where: {
          id: order_id,
          createdAt: {
            [Op.gte]: moment("01", "DD")
              .add(day - 2, "days")
              .toDate(),
            [Op.lt]: moment("01", "DD").add(day, "days").toDate(),
          },
        },
      });

      //if then only it will take the shipping details from the customer
      if (orderWithTwoDays) {
        const orderID = orderWithTwoDays.id;
        const { total_product_amount, createdAt } = orderWithTwoDays;
        const shippingDetails = await ShippingDetails.findOne({
          where: { order_id },
        });
        const { first_name, last_name, contact_number, shipping_address } =
          shippingDetails;
        const customerName = `${first_name} ${last_name}`;
        orderDetails.push({
          customerName,
          shipping_address,
          contact_number,
          complete_status,
          order_id,
          total_product_amount,
          purchasedDate: createdAt,
        });
      }
    }
    res.status(200).json({ orderDetails });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//getting more details about the order
const getOneOrderDetailsController = async (req, res) => {
  const { orderID } = req.params;
  const productContainer = [];
  try {
    const sellProduct = await SellProduct.findAll({
      where: { order_id: orderID },
    });
    for (let i = 0; i < sellProduct.length; i++) {
      const productID = sellProduct[i].product_id;
      const { quantity, price, discount } = sellProduct[i];
      const product = await Product.findOne({ where: { id: productID } });
      const { name } = product;
      const itemPriceAfterDiscount = parseInt(price) - (price * discount) / 100;
      productContainer.push({ name, quantity, itemPriceAfterDiscount });
    }
    res.status(200).json({ productContainer });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//get the pending order details controller
const pendingOrderDetailsController = async (req, res) => {
  const { driverID } = req.params;
  const orderUsers = [];
  try {
    const pending = await Deliveries.findAll({
      where: {
        delivery_driver_id: driverID,
        request_status: 0,
        complete_status: 0,
      },
    });
    for (let i = 0; i < pending.length; i++) {
      let { order_id } = pending[i];
      const userData = await ShippingDetails.findOne({ where: { order_id } });
      const { first_name, last_name, shipping_address, createdAt } = userData;
      const name = `${first_name} ${last_name}`;
      orderUsers.push({ name, shipping_address, createdAt, order_id });
    }
    res.status(200).json({ orderUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

const updateDeliveryStatusController = async (req, res) => {
  const { driverID, orderID } = req.params;
  try {
    const deliveries = await Deliveries.update(
      { complete_status: 1 },
      {
        where: {
          delivery_driver_id: driverID,
          order_id: orderID,
        },
      }
    );
    if (deliveries) {
      res.status(200).json({ message: "State Has been updated" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get the number of assigned orders for driver today
const todayAssignmentController = async (req, res) => {
  const { driverID } = req.params;
  const day = moment().date();

  try {
    const assignment = await Deliveries.findAll({
      where: {
        delivery_driver_id: driverID,
        request_status: 1,
        createdAt: {
          [Op.gte]: moment("01", "DD").add(day, "days").toDate(),
        },
      },
    });
    const noAssignedToday = assignment.length;
    res.status(200).json({ noAssignedToday });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//get the completed number of orders today
const todayCompleteController = async (req, res) => {
  const { driverID } = req.params;
  const day = moment().date();

  try {
    const completed = await Deliveries.findAll({
      where: {
        delivery_driver_id: driverID,
        complete_status: 1,
        createdAt: {
          [Op.gte]: moment("01", "DD")
            .add(day - 1, "days")
            .toDate(),
        },
      },
    });
    const noCompletedToday = completed.length;
    res.status(200).json({ noCompletedToday });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//get the pending orders for today
const todayPendingOrderController = async (req, res) => {
  const { driverID } = req.params;
  const day = moment().date();
  try {
    const pending = await Deliveries.findAll({
      where: {
        delivery_driver_id: driverID,
        request_status: 0,
        complete_status: 0,
        createdAt: {
          [Op.gte]: moment("01", "DD").add(day, "days").toDate(),
        },
      },
    });

    const noPendingToday = pending.length;
    res.status(200).json({ noPendingToday });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//get the completed orders in this month
const monthlyCompletedOrderController = async (req, res) => {
  const { driverID } = req.params;
  let month = moment().month();
  month += 1;
  try {
    const monthlyCompleted = await Deliveries.findAll({
      where: {
        delivery_driver_id: driverID,
        complete_status: 1,
        createdAt: {
          [Op.gte]: moment("0101", "MMDD")
            .add(month - 1, "months")
            .toDate(),
          [Op.lt]: moment("0101", "MMDD").add(month, "months").toDate(),
        },
      },
    });
    const noMonthlyCompleted = monthlyCompleted.length;
    res.status(200).json({ noMonthlyCompleted });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllOrdersForDayController,
  getOneOrderDetailsController,
  pendingOrderDetailsController,
  updateDeliveryStatusController,
  todayAssignmentController,
  todayCompleteController,
  todayPendingOrderController,
  monthlyCompletedOrderController,
};
