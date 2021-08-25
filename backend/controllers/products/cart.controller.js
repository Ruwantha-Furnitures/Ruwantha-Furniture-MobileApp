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

const UpdateCartController = async (req, res) => {
  console.log("update controller");
  console.log(req.body);
  const { productId, customerId } = req.params;
  const { quantity } = req.body;
  console.log(quantity, customerId, productId);
  try {
    const response = await Cart.update(
      { quantity },
      {
        where: {
          customer_id: customerId,
          id: productId,
          is_deleted: 0,
        },
      }
    );
    console.log(response);
    res.status(200).json({ message: "Cart has been updated" });
  } catch (error) {
    console.log(error);
  }
};

const DeleteCartController = async (req, res) => {
  const { cartId } = req.params;
  try {
    const deleteCart = await Cart.update(
      { is_deleted: true },
      { where: { id: cartId } }
    );
    res
      .status(200)
      .json({ state: "deleted", message: "Cart Item has been deleted" });
  } catch (error) {
    console.log(error);
  }
};

const GetCartItemsController = async (req, res) => {
  const { customerId } = req.params;
  console.log(customerId);
  let totalQuantity = 0;
  try {
    const response = await Cart.findAll({
      where: { customer_id: customerId, is_deleted: 0 },
    });
    console.log(response);

    response.map((item) => (totalQuantity = +item.quantity));
    console.log(totalQuantity);
    res.status(200).json({ cartItems: response, totalQuantity });
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
