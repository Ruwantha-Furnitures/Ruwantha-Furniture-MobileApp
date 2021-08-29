const db = require("../../models");
const Order = db.order;
const SellProduct = db.sellProduct;
const ProductReviews = db.productReviews;
const Product = db.product;

const getAllOrdersController = async (req, res) => {
  const { customerID } = req.params;
  try {
    const orders = await Order.findAll({
      where: {
        customer_id: customerID,
      },
    });
    console.log(orders);
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPurchasedProductsController = async (req, res) => {
  const { orderID } = req.params;
  console.log("this called");
  const productDetails = [];
  try {
    const sellProduct = await SellProduct.findAll({ order_id: orderID });
    for (let i = 0; i < sellProduct.length; i++) {
      const product = await Product.findOne({
        where: {
          id: sellProduct[i].product_id,
        },
      });
      const { name, id } = product;
      const purchasedDate = sellProduct[i].createdAt;
      const discount = (sellProduct[i].discount * sellProduct[i].price) / 100;
      const itemPrice = sellProduct[i].price - discount;
      const sellProductData = {
        name,
        id,
        itemPrice,
        purchasedDate,
        orderID: sellProduct[i].order_id,
      };
      productDetails.push(sellProductData);
    }
    console.log(productDetails);
    // sellProduct.map((order) => console.log(order));
    res.status(200).json({ sellProduct, productDetails });
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
