import { Router } from "express";
import * as orderController from "../controllers/order.controller.ts"

export const orderRouter = Router();

orderRouter.get("/", orderController.getAllOrders);
orderRouter.post("/", orderController.createOrder);

orderRouter.get("/:orderId",  orderController.getOrderById);
orderRouter.patch("/:orderId",  orderController.updateOrderById);
orderRouter.delete("/:orderId",  orderController.deleteOrderById);
