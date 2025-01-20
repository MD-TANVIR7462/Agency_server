import { Router } from "express";
import { SettingsController } from "./settings.controllers";

const router = Router();

router.get("/", SettingsController.getSettings);
router.post("/create-settings", SettingsController.createSettings);
router.patch("/update-settings/:id", SettingsController.updateASettings);

export const SettingsRoute = router;
