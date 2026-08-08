import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.ts";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";


export async function signup(req: Request, res: Response) {
    try {

        const { username, password } = req.body;

        // const hashedPassword = await bcrypt.hash(password, 10);

        // const user = await UserModel.create({
        //     username,
        //     password: hashedPassword
        // });

        return res.status(201).json({
            message: "Account created",
            userId: "user._id"
        })

    } catch(e) {
        console.log(e)
        return res.status(500).json({
            message: "We ran into an error"
        })
    }
}

export async function login(req: Request, res: Response) {
    try {

        const { username, password } = req.body;

        // const user = await UserModel.findOne({ username });

        // if (!user) {
        //     return res.status(401).json({
        //         message: "Invalid credentials"
        //     });
        // }

        // const passwordMatches = await bcrypt.compare(password, user.password);

        // if (!passwordMatches) {
        //     return res.status(401).json({
        //         message: "Invalid credentials"
        //     });
        // }

        if (username !== "johndoe01" || password !== "12345678") {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                username: "johndoe01",
                userId: "jd123",
            }, // payload
            process.env.JWT_SECRET!,
            {
                expiresIn: "1h"
            }
        );

        // res.cookie("token", token, {
        //     httpOnly: true,
        //     secure: false,
        //     sameSite: "lax",
        //     maxAge:  60 * 60 * 1000
        // });

        return res.json({
            message: "Login successful",
            token
        });

    } catch {
        return res.status(500).json({
            message: "We ran into an error"
        })
    }
}