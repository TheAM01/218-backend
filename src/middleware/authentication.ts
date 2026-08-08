import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "../types/jwtPayload.ts";


export function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token as string | undefined;

    if (token === undefined) {
        return res.status(401).json({
            message: "Authentication required"
        });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        req.username = payload;

        next();
    } catch {
        return res.status(401).json({
            message: "Authentication required"
        });
    }
}


// export function verifyToken(token: string) {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!);

//     if (typeof decoded !== "object" || decoded === null) {
//         throw new Error("Invalid token payload");
//     }

//     return {
//         userId: decoded.userId,
//         username: decoded.username,
//     }
// }