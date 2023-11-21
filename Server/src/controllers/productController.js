const Product = require("../model/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const createProduct = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ error: "All the requirement are required." });
    }

    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getProductDetail = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: "Id parameter are required" });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(204)
        .json({ message: "Product with the given ID not found" });
    } else {
      return res.status(200).json(product);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getAllProducts, createProduct, getProductDetail };
