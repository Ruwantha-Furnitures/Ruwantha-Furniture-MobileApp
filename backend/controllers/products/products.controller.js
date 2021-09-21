const db = require("../../models");
const Product = db.product;
const Category = db.category;
const Type = db.type;
const ProductReview = db.productReview;

const getAllProducts = async (req, res) => {
  const data = [];
  try {
    const product = await Product.findAll();
    for (let i = 0; i < product.length; i++) {
      console.log(product[i].name);
      const {
        id,
        type_id,
        name,
        price,
        description,
        color,
        width,
        height,
        discount,
      } = product[i];
      const types = await Type.findOne({ where: { id: type_id } });
      const { category_id } = types;
      const category = await Category.findOne({ where: { id: category_id } });
      const ratingProducts = await ProductReview.findAll({
        where: { product_id: id },
      });
      let rating = 1;
      if (ratingProducts.length > 0) {
        let totalRating = 0;
        for (let j = 0; j < ratingProducts.length; j++) {
          const { rating_points } = ratingProducts[j];
          totalRating += rating_points;
        }
        rating = parseInt(totalRating / ratingProducts.length);
      }
      const type = category.name;
      data.push({
        id,
        name,
        price,
        description,
        color,
        width,
        height,
        discount,
        type,
        rating,
      });
    }
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.productId },
    });
    res.status(200).json({ product });
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
