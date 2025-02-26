import { Router } from "express";
import { changePassword } from "./changepass.controller";
import { permission } from "../../../utils";

const router = Router();
router.post("/", permission.bothAdmins, changePassword);

export const passwordChangeRoute = router;
