const express = require("express");
let app = express();
const router = new express.Router(); //create new router
const {
  listProducts,
  createProduct,
  clearProducts,
} = require("./modules/products");
// step
// get data
// validate data
// process data
// send respone

// listProduct() >> return array of products
// createProduct(newProduct) >> return created product

// localhost:9000/api/api1
router.get("/product", async (req, res, next) => {
  try {
    let products = await listProducts();
    res.json(products);
  } catch (err) {
    next(err); // next to errorhandler in index.js because errorhandler is right after router
  }
});
//localhost:9000/api/api2
router.post("/product", async (req, res, next) => {
  try {
    let newProduct = req.body;
    let createdProduct = await createProduct(newProduct);
    res.json(createdProduct);
  } catch (error) {
    next(err);
  }
});

router.delete("/product", async (req, res, next) => {
  await clearProducts();
  res.json([]);
});

module.exports = router;
