const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProducts,
  getProductDetails,
  getAdminProducts,
} = require("../controllers/productController");
const { authorizeRoles, isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(getAdminProducts);
  
router.route("/admin/product/new").post(createProduct);
// router
//   .route("/product/new")
//   .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProducts)
  .get(getProductDetails);

router
  .route("/product/:category/:slug").get(getProductDetails);

module.exports = router;
