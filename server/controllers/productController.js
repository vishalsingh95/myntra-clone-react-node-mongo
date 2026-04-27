const Product = require("../models/Product");


exports.getProducts = async (req, res) => {
  const products = await Product.find().populate("category", "id name", "brand", "id name");
  res.json(products);
};

exports.addProduct = async (req, res) => {
  const { name, description, price, category, brand, image, stock, ratings } = req.body;
  const product = await Product.create({ name, description, price, category, brand, image, stock, ratings });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const { id, name, description, price, category, brand, image, stock, ratings } = req.body;
  const product = await Product.findByIdAndUpdate(id, { name, description, price, category, brand, image, stock, ratings });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.body;
  const product = await Product.findByIdAndDelete(id);
  res.json(product);
};
