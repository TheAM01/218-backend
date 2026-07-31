import { model, Schema, type InferSchemaType } from "mongoose";

const orderSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    product: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
});

export type IOrder = InferSchemaType<typeof orderSchema>;

export const OrderModel = model("Order", orderSchema);