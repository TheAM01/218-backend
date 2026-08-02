import type { Request, Response, NextFunction } from "express";

export function headersMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);

    next();
}