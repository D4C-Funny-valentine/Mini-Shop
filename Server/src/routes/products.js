const {
  getAllProducts,
  createProduct,
  getProductDetail,
} = require("../controllers/productController");

const router = require("express").Router();

router.route("/product").get(getAllProducts).post(createProduct);

router.get("/product/:id", getProductDetail);

module.exports = router;
