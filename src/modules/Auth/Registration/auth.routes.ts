// routes/auth.routes.ts
import { Router } from "express";
import { AuthController } from "./auth.controller";
import { permission } from "../../../utils";

const router = Router();

router.post("/", permission.superAdmin, AuthController.registerUser);
router.get("/all", permission.bothAdmins, AuthController.getAllUsers);
// router.get("/:id", permission.bothAdmins, AuthController.getUserById);
router.patch("/update-user/:id", permission.superAdmin, AuthController.updateUser);
router.delete("/delete-user/:id", permission.superAdmin, AuthController.deleteUser);
router.get("/me", permission.bothAdmins, AuthController.getMe);

export const RegistrationRoutes = router;
