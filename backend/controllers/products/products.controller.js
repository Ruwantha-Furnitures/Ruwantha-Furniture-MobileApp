const db = require("../../models");
const Product = db.product;

const getAllProducts = async (req, res) => {
  try {
    const data = await Product.findAll();
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
  }
};

const getOneProduct = async (req, res) => {
  console.log(req.params.productId);
  try {
  } catch (error) {
    console.error(error);
  }
};

const getNewProducts = async (req, res) => {
  try {
    const newProducts = await Product.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({ newProducts });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProductsController: getAllProducts,
  getOneProductController: getOneProduct,
  getNewProductsController: getNewProducts,
};
