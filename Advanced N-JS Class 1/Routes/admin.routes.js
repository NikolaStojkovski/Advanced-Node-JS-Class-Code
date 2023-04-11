import express from "express";
import AdminController from "../Controllers/admin.controller.js";
import productValidator from "../Middleware/product.validator.middleware.js";

const router = express.Router();

router.post("/", productValidator, AdminController.addProduct);
router.put("/:id", productValidator, AdminController.updateProduct);
router.delete("/:id", AdminController.deleteProduct);

export default router;
