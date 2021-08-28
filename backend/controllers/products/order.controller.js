const db = require("../../models");
const Order = db.order;
const SellProduct = db.sellProduct;
const orderDetailsController = async (req, res) => {
  console.log("order Called");
  console.log(req.body.data);
  const { total_product_amount, customer_id, payment_method } = req.body.data;
  const paymentDetails = {
    total_product_amount,
    customer_id,
    payment_method,
    is_deleted: 0,
  };
  try {
    const order = await Order.create(paymentDetails);
    console.log(order);
    res.status(201).json({
      message: "Order has been created successfully",
      order_id: order.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const sellProductsController = async (req, res) => {
  const { product_id, order_id, price, quantity, discount } = req.body;
  try {
    const sellProducts = await SellProduct.create({
      product_id,
      order_id,
      price,
      quantity,
      discount,
    });
    res.status(201).json({ message: "Sell Products successfully created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { orderDetailsController, sellProductsController };
