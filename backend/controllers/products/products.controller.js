const { Item } = require("../../models");

const getAllProducts = async (req, res) => {
  try {
    console.log("response");
    const data = await Item.findAll();
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
