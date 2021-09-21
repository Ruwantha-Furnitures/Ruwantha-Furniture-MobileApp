const db = require("../../models");
const Order = db.order;
const SellProduct = db.sellProduct;
const Product = db.product;
const orderDetailsController = async (req, res) => {
  const { total_product_amount, customer_id, payment_method } = req.body.data;
  const paymentDetails = {
    total_product_amount,
    customer_id,
    payment_method,
    is_deleted: 0,
  };
  try {
    const order = await Order.create(paymentDetails);
    res.status(201).json({
      message: "Order has been created successfully",
      order_id: order.id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sellProductsController = async (req, res) => {
  const { cartItems, order_id } = req.body.sellProductDetails;
  let products = [];
  try {
    for (let i = 0; i < cartItems.length; i++) {
      let quantity = cartItems[i].quantity;
      let product = await Product.findOne({
        where: {
          id: cartItems[i].id,
        },
      });
      const { price, discount } = product;
      let productData = {
        product_id: cartItems[i].id,
        order_id,
        price,
        quantity,
        discount,
      };
      products.push(productData);
    }
    for (let i = 0; i < products.length; i++) {
      const { product_id, order_id, price, quantity, discount } = products[i];
      const sellProducts = await SellProduct.create({
        product_id,
        order_id,
        price,
        quantity,
        discount,
      });
    }
    res.status(201).json({ message: "Sell Products successfully created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { orderDetailsController, sellProductsController };
