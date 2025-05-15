import { Router } from "express";
import { SettingsController } from "./settings.controllers";
import { permission } from "../../utils";

const router = Router();

router.get("/", permission.bothAdmins, SettingsController.getSettings);
router.post("/create-settings",  SettingsController.createSettings);
router.patch("/update-settings/:id",  SettingsController.updateASettings);
// router.post("/create-settings", permission.bothAdmins, SettingsController.createSettings);
// router.patch("/update-settings/:id", permission.bothAdmins, SettingsController.updateASettings);

export const SettingsRoute = router;
