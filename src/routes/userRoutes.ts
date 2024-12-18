import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController.js";

const router = Router();
const userController = new UserController();

router.post("/register", userController.register);
router.post("/login", userController.login);

export { router as userRoutes };