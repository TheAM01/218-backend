import "express";

declare module "express-server-static-core" {
    interface Request {
        // user?: {
        username?: string;
        userId?: string;
        // }
    }
}