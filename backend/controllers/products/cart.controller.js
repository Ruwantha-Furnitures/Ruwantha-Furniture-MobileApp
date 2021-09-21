const db = require("../../models");
const Cart = db.cart;
const Product = db.product;
const AddToCartController = async (req, res) => {
  const { customer_id, product_id, quantity } = req.body.data;
  const products = { customer_id, product_id, quantity };
  try {
    const response = await Cart.create(products);
    res
      .status(201)
      .json({ message: "Item Has been added successfully to cart" });
  } catch (error) {
    console.error(error);
  }
};

const UpdateCartController = async (req, res) => {
  const { productId, customerId } = req.params;
  const { quantity } = req.body;
  try {
    const response = await Cart.update(
      { quantity },
      {
        where: {
          customer_id: customerId,
          product_id: productId,
          is_deleted: 0,
        },
      }
    );
    res.status(200).json({ message: "Cart has been updated" });
  } catch (error) {
    console.log(error);
  }
};

const DeleteCartController = async (req, res) => {
  const { productId, customerId } = req.params;
  try {
    const deleteCart = await Cart.update(
      { is_deleted: true },
      { where: { customer_id: customerId, product_id: productId } }
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
  const products = [];
  let totalQuantity = 0;
  let totalAmount = 0;
  let discountAmount = 0;
  try {
    const response = await Cart.findAll({
      where: { customer_id: customerId, is_deleted: 0 },
    });
    const result = response.map((item) =>
      products.push({ id: item.product_id, quantity: item.quantity })
    );
    //getting the total quantity
    response.map((item) => (totalQuantity += item.quantity));

    //getting the total amount & total discount for the customer
    for (let i = 0; i < products.length; i++) {
      const quantity = products[i].quantity;
      const result = await Product.findOne({ where: { id: products[i].id } });
      totalAmount += result.price * quantity;
      discountAmount += (result.price * quantity * result.discount) / 100;
    }

    res.status(200).json({
      cartItems: products,
      totalQuantity,
      totalAmount,
      discountAmount,
    });
  } catch (error) {
    console.log(error);
  }
};

const GetCartInitialTotalAmountController = async (req, res) => {
  const { products } = req.query;
  let totalAmount = 0;
  try {
    for (let i = 0; i < products.length; i++) {
      const quantity = products[i].quantity;
      const result = await Product.findOne({ where: { id: products[i].id } });
      totalAmount += result.price * quantity;
    }
    res.status(200).json({ totalAmount });
  } catch (error) {
    console.log(error);
  }
};

const DeleteCustomerCartController = async (req, res) => {
  const { customerId } = req.params;
  try {
    const deleteProduct = await Cart.update(
      {
        is_deleted: true,
      },
      { where: { customer_id: customerId } }
    );
    res.status(200).json({ message: "Successfully deleted cart product" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  AddToCartController,
  DeleteCartController,
  UpdateCartController,
  GetCartItemsController,
  GetCartInitialTotalAmountController,
  DeleteCustomerCartController,
};
