import { Router } from "express";
import { ApplicationController } from "./application.controller";
import { permission } from "../../utils";

const router = Router();
router.get("/", ApplicationController.getApplications);
router.get("/:id", ApplicationController.getAnApplication);
router.post("/create-application", ApplicationController.createApplication);
router.patch("/select/:id", permission.bothAdmins, ApplicationController.selectApplication);
router.patch("/reject/:id", permission.bothAdmins, ApplicationController.rejectApplication);
router.delete("/delete-application/:id", permission.bothAdmins, ApplicationController.deleteAnApplication);

export const ApplicationRoute = router;
