const { product_categories } = require("../../models");
const getCategoriesController = async (req, res) => {
  try {
    const result = await product_categories.findAll();
    console.log(result);
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getCategoriesController };
