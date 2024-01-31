const express = require("express");
const router = express.Router();
const multer = require("../middlewares/multer-config");

// Importation des controllers pour l'implémentation du CRUD
const productCtrl = require("../controllers/product");

// Implémentation du CRUD : Routes POST/GET/PUT/DELETE
router.get("/", productCtrl.getAllProducts);
router.post("/", multer, productCtrl.createProduct);
router.get("/:id", productCtrl.getOneProduct);
router.put("/:id", multer, productCtrl.updateProduct);
router.delete("/:id", productCtrl.deleteProduct);
router.patch("/:id", multer, productCtrl.patchProduct);

// Exportationd des routes
module.exports = router;
