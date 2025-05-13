import { Router } from "express";
import { frogetPasswordController, resetPasswordController } from "./frogetpass.controller";

const router = Router();
router.post("/forget-password/", frogetPasswordController);
router.post("/reset-password/", resetPasswordController);

export const frogetPasswordRoute = router;
