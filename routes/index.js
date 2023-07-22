const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.post("/", ProductController.product_create);
router.get("/", ProductController.product_all);
router.get("/:productId", ProductController.product_details);
router.put("/:productId", ProductController.product_update);
router.delete("/:productId", ProductController.product_delete);

module.exports = router;
