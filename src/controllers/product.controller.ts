import type { Request, Response } from "express";
import { ProductModel } from "../models/product.model.ts";
import { products as staticProducts } from "../lib/products.data.ts";
import type { IProduct } from "../models/product.model.ts";

export async function getAllProducts(req: Request, res: Response) {
    try {

        const products = await ProductModel.find();
        return res.json(products);

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}

export async function getProductById(req: Request, res: Response) {
    try {

        const { productId } = req.params;
    
        if (!productId || Array.isArray(productId)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }
    
        const product = await ProductModel.find({ id: productId });
    
        if (!product) {
            return res.status(404).json({ message: "No product found with matching ID" });
        }
    
        return res.json(product);

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}


export async function createProduct(req: Request, res: Response) {
    try {

        const { id, title, price, brand, boxContent, image }: IProduct = req.body;
    
        if (!id || !title || !price || !brand || !boxContent || !image) {
            return res.status(400).json({ message: "Invalid product request body" });
        }
    
        const product = await ProductModel.create({
            id,
            title,
            price,
            brand,
            boxContent,
            image
        });
    
        return res.status(201).json({ success: true, message: "Product created successfully!", product });

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}

export async function updateProductById(req: Request, res: Response) {
    try {

        const { productId } = req.params;
    
        if (!productId || Array.isArray(productId)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }

        const { id, title, price, brand, boxContent, image }: IProduct = req.body;
    
        // if (!id || !title || !price || !brand || !boxContent || !image) {
        //     return res.status(400).json({ message: "Invalid product request body" });
        // }
    
        const updatedProduct = await ProductModel.findOneAndUpdate(
            { id: productId },
            {
                id,
                title,
                price,
                brand,
                boxContent,
                image
            },
            {
                new: true,
                runValidators: true
            }
        );
    
        return res.status(200).json({ success: true, message: "Product updated successfully!", updatedProduct });

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}

export async function deleteProductById(req: Request, res: Response) {
    try {

        const { productId } = req.params;
    
        if (!productId || Array.isArray(productId)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }
    
        const deletedProduct = await ProductModel.findOneAndDelete(
            { id: productId }
        );
    
        return res.status(200).json({ success: true, message: "Product deleted successfully!", deletedProduct });

    } catch (err) {

        console.log(err);
        res.status(500).json({ message: "We ran into an error!" });

    }
}