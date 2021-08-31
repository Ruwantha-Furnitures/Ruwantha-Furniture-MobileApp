const db = require("../../models");
const Product = db.product;
const Category = db.category;
const Type = db.type;

const getAllProducts = async (req, res) => {
  const data = [];
  try {
    const product = await Product.findAll();
    console.log(product.length);
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
      const type = category.name;
      console.log(name);
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
      });
    }
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
  }
};

const getOneProduct = async (req, res) => {
  console.log("Inside the product");
  console.log(req.params.productId);
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
