const db = require("../../models");
const Product = db.product;

const getAllProducts = async (req, res) => {
  try {
    console.log("Fetch Products");
    const data = await Product.findAll();
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
  }
};

const getOneProduct = () => {};

module.exports = {
  getAllProductsController: getAllProducts,
  getOneProductController: getOneProduct,
};
