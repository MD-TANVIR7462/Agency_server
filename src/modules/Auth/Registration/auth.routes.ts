// routes/auth.routes.ts
import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/register", AuthController.registerUser);
router.get("/all", AuthController.getAllUsers);
router.get("/:id", AuthController.getUserById);
router.patch("/update/:id", AuthController.updateUser);
router.delete("/delete/:id", AuthController.deleteUser);

export const AuthRoutes = router;
