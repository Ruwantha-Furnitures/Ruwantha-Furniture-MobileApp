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
          product_id: productId,
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
    console.log(response);
    const result = response.map((item) =>
      products.push({ id: item.product_id, quantity: item.quantity })
    );
    console.log(products);
    //getting the total quantity
    response.map((item) => (totalQuantity += item.quantity));

    //getting the total amount & total discount for the customer
    for (let i = 0; i < products.length; i++) {
      console.log(products[i].id);
      const quantity = products[i].quantity;
      const result = await Product.findOne({ where: { id: products[i].id } });
      totalAmount += result.price * quantity;
      discountAmount += (result.price * quantity * result.discount) / 100;
    }

    console.log(totalAmount, discountAmount, totalQuantity, products);
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
      console.log(products[i].id);
      const quantity = products[i].quantity;
      const result = await Product.findOne({ where: { id: products[i].id } });
      totalAmount += result.price * quantity;
    }
    console.log(totalAmount);
    res.status(200).json({ totalAmount });
  } catch (error) {
    console.log(error);
  }
};

const DeleteCustomerCartController = async (req, res) => {
  console.log("delete");
  const { customerId } = req.params;
  try {
    const deleteProduct = await Cart.update({
      is_deleted: 1,
      where: { customer_id: customerId },
    });
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
