const db = require("../../models");
const Cart = db.cart;
const AddToCartController = async (req, res) => {
  const { customer_id, product_id, quantity } = req.body.data;
  const cartData = { customer_id, product_id, quantity };
  try {
    const response = await Cart.create(cartData);
    res
      .status(201)
      .json({ message: "Item Has been added successfully to cart" });
  } catch (error) {
    console.error(error);
  }
};

const UpdateCartController = () => {};

const DeleteCartController = () => {};

const GetCartItemsController = async (req, res) => {
  const { customerId } = req.params;
  console.log(customerId);
  try {
    const response = await Cart.findOne({
      where: { customer_id: customerId },
    });
    console.log(response);
    res.status(200).json({ response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  AddToCartController,
  DeleteCartController,
  UpdateCartController,
  GetCartItemsController,
};
