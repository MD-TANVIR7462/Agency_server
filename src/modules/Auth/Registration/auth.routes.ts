// routes/auth.routes.ts
import { Router } from "express";
import { AuthController } from "./auth.controller";
import { permission } from "../../../utils";

const router = Router();

router.post("/", AuthController.registerUser);
router.get("/all",permission.bothAdmins, AuthController.getAllUsers);
router.get("/:id", AuthController.getUserById);
router.patch("/update-user/:id", AuthController.updateUser);
router.delete("/delete-user/:id", AuthController.deleteUser);

export const RegistrationRoutes = router;
