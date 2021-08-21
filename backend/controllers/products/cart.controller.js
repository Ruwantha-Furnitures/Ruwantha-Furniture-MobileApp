const db = require("../../models");
const Cart = db.cart;
const AddToCartController = async (req, res) => {
  console.log("Add to Cart");
  console.log(req.body.data);
  const { customer_id, product_id, quantity } = req.body.data;
  const cartData = { customer_id, product_id, quantity };
  try {
    const response = await Cart.create(cartData);
  } catch (error) {
    console.error(error);
  }
};

const UpdateCartController = () => {};

const DeleteCartController = () => {};

module.exports = {
  AddToCartController,
  DeleteCartController,
  UpdateCartController,
};
