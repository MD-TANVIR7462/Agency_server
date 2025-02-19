import { Router } from "express";
import { loginController } from "./login.controller";

const router = Router()
router.post('/', loginController.loginUuser)

export const LoginRoutes = router