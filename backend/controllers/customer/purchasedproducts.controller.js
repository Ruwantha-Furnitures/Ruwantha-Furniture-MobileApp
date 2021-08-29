const db = require("../../models");
const Order = db.order;
const SellProduct = db.sellProduct;
const ProductReviews = db.productReviews;

const getAllOrdersController = async (req, res) => {
  const { customerID } = req.params;
  try {
    const orders = await Order.findAll({
      where: {
        customer_id: customerID,
      },
    });
    console.log(orders.id);
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPurchasedProductsController = async (req, res) => {
  const { orderID } = req.params;
  try {
    const SellProduct = await SellProduct.findAll({ order_id: orderID });
    console.log(SellProduct);
    res.status(200).json({ SellProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const provideCustomerFeedbackController = async (req, res) => {
  const { product_id, feedback, rating_points } = req.body;
  try {
    const productReview = await ProductReviews.create({
      product_id,
      feedback,
      rating_points,
    });
    res.status(200).message({ message: "Your Product Review has been added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPurchasedProductsController,
  provideCustomerFeedbackController,
  getAllOrdersController,
};
