const db = require("../../models");
const Order = db.order;
const SellProduct = db.sellProduct;
const ProductReviews = db.productReview;
const Product = db.product;

const getAllOrdersController = async (req, res) => {
  const { customerID } = req.params;
  console.log(customerID);
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
  console.log(orderID);
  console.log("this called");
  const productDetails = [];
  try {
    const sellProduct = await SellProduct.findAll({
      where: { order_id: orderID },
    });
    console.log("sellProduct");
    console.log(sellProduct);
    for (let i = 0; i < sellProduct.length; i++) {
      const product = await Product.findOne({
        where: {
          id: sellProduct[i].product_id,
        },
      });
      const { name, id } = product;
      const purchasedDate = sellProduct[i].createdAt;
      const discount = (sellProduct[i].discount * sellProduct[i].price) / 100;
      const itemPrice = sellProduct[i].price;
      const sellProductData = {
        name,
        id,
        itemPrice,
        purchasedDate,
        discount,
        orderID: sellProduct[i].order_id,
      };
      console.log(sellProductData);
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
  console.log("body");
  console.log(req.body);
  console.log(product_id);
  console.log(feedback);
  console.log(rating_points);
  try {
    const productReview = await ProductReviews.create({
      product_id,
      feedback,
      rating_points,
    });
    console.log(productReview);
    res.status(200).json({ message: "Your Product Review has been added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPurchasedProductsController,
  provideCustomerFeedbackController,
  getAllOrdersController,
};
