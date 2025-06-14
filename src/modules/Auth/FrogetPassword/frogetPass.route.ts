import { Router } from "express";
import { frogetPasswordController, resetPasswordController } from "./frogetpass.controller";

const router = Router();
router.post("/forget-password/", frogetPasswordController);
router.patch("/reset-password/", resetPasswordController);

export const frogetPasswordRoute = router;
