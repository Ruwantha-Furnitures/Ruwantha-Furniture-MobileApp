const db = require("../../models");
const product_categories = db.category;
const getCategoriesController = async (req, res) => {
  try {
    const result = await product_categories.findAll();
    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getCategoriesController };
