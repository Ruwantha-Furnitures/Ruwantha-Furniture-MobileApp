const { products } = require("../../models");

const getAllProducts = async (req, res) => {
  try {
    console.log("response");
    const data = await products.findAll();
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
