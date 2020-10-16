const Product = require("../models/productModel");

// @desc Gets All Products
// @route GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (err) {
    console.log(err);
  }
}

// @desc Gets Single Products
// @route GET /api/products/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (err) {
    console.log(err);
  }
}

// @desc Create aproduct
// @route POST /api/products
async function createProduct(req, res) {
  try {
    const product = {
      title: "test Product",
      description: "This is my Product",
      price: 100,
    };

    const newProduct = await Product.create(product);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
