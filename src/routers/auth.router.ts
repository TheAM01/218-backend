import { Router } from "express";
import * as authController from "../controllers/auth.controller.ts"

export const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.post("/signup", authController.signup);
