import { model, Schema, type InferSchemaType } from "mongoose";

const productSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    boxContent: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

export type IProduct = InferSchemaType<typeof productSchema>;

export const ProductModel = model("Product", productSchema);