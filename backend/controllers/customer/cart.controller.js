const { carts } = require("../../models");

const AddToCartController = async (req, res) => {
  const { customer_id, product_id, quantity } = req.body.data;
  const cartData = { customer_id, product_id, quantity };
  try {
    const response = await carts.create(cartData);
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
