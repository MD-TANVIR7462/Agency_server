import { Router } from "express";
import { loginController } from "./login.controller";

const router = Router()
router.post('/', loginController.loginUuser)
router.post('/refresh-token',loginController.getRefreshToken)

export const LoginRoutes = router