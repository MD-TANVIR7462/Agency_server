import { Router } from "express";
import { frogetPasswordController } from "./frogetpass.controller";

const router = Router();
router.post("/", frogetPasswordController);

export const frogetPasswordRoute = router;
