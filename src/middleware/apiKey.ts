import type { Request, Response, NextFunction } from "express";

export function apiKeyMiddleware(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers["x-api-key"];
    const allowedApiKey = "12345678";
    if (!apiKey || apiKey !== allowedApiKey) {
        return res.status(401).json({
            message: "Invalid API key!"
        });
    }
    next();
}