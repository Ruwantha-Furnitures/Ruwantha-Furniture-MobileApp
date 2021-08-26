const db = require("../../models");
const Order = db.order;
const SellProduct = db.sellProduct;
const orderDetailsController = async (req, res) => {
  const { total_product_amount, customer_id, payment_method } = req.body.data;
  try {
    const order = await Order.create({
      total_product_amount,
      customer_id,
      payment_method,
    });
    res.status(201).json({ message: "Order has been created successfully" });
  } catch (error) {
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
