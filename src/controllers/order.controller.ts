import type { Request, Response } from "express";
import { OrderModel } from "../models/order.model.ts";
// import { orders as staticOrders } from "../lib/orders.data.ts";
import type { IOrder } from "../models/order.model.ts";

export async function getAllOrders(req: Request, res: Response) {
    try {

        const page: number = Math.max(1, parseInt(req.query.page as string) || 1);
        const limit: number = Math.min(100, parseInt(req.query.limit as string) || 1);

        const skip = (page - 1) * limit;

        const orders = await OrderModel
        .find()
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });

        return res.json(orders);

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}

export async function getOrderById(req: Request, res: Response) {
    try {

        const { orderId } = req.params;
    
        if (!orderId || Array.isArray(orderId)) {
            return res.status(400).json({ message: "Invalid order ID" });
        }
    
        const order = await OrderModel.find({ id: orderId });
    
        if (!order) {
            return res.status(404).json({ message: "No order found with matching ID" });
        }
    
        return res.json(order);

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}


export async function createOrder(req: Request, res: Response) {
    try {

        const { id, product, quantity, amount }: IOrder = req.body;
    
        if (!id || !product || !quantity || !amount) {
            return res.status(400).json({ message: "Invalid request body" });
        }
    
        const order = await OrderModel.create({
            id,
            product,
            quantity,
            amount,
        });
    
        return res.status(201).json({ success: true, message: "Order created successfully!", order });

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}

export async function updateOrderById(req: Request, res: Response) {
    try {



        const { orderId } = req.params;
    
        if (!orderId || Array.isArray(orderId)) {
            return res.status(400).json({ message: "Invalid order ID" });
        }

        const { id, product, quantity, amount }: IOrder = req.body;
    
        // if (!id || !title || !price || !brand || !boxContent || !image) {
        //     return res.status(400).json({ message: "Invalid order request body" });
        // }
    
        const updatedOrder = await OrderModel.findOneAndUpdate(
            { id: orderId },
            {
                id,
                product,
                quantity,
                amount,
            },
            {
                new: true,
                runValidators: true
            }
        );
    
        return res.status(200).json({ success: true, message: "Order updated successfully!", updatedOrder });

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}

export async function deleteOrderById(req: Request, res: Response) {
    try {

        const { orderId } = req.params;
    
        if (!orderId || Array.isArray(orderId)) {
            return res.status(400).json({ message: "Invalid order ID" });
        }
    
        const deletedOrder = await OrderModel.findOneAndDelete(
            { id: orderId }
        );
    
        return res.status(200).json({ success: true, message: "Order deleted successfully!", deletedOrder });

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}