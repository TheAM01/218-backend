import { Router } from "express";
import * as productController from "../controllers/product.controller.ts"
import { loggerMiddleware } from "../middleware/logger.ts";

export const productRouter = Router();

productRouter.get("/", productController.getAllProducts);
productRouter.post("/", productController.createProduct);

productRouter.get("/:productId",  productController.getProductById);
productRouter.patch("/:productId",  productController.updateProductById);
productRouter.delete("/:productId",  productController.deleteProductById);
