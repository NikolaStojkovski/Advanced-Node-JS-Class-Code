import express from "express";
import productsRouter from "./Routes/products.routes.js";
import adminRouter from "./Routes/admin.routes.js";

const router = express.Router();

router.use("/products", productsRouter);
router.use("/admin", adminRouter);

export default router;
