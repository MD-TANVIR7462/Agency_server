import { Router } from "express";
import { ApplicationController } from "./application.controller";

const router = Router();
router.get("/", ApplicationController.getApplications);
router.get("/:id", ApplicationController.getAnApplication);
router.post("/create-application", ApplicationController.createApplication);
router.patch("/select/:id", ApplicationController.selectApplication);
router.patch("/reject/:id", ApplicationController.deleteAnApplication);
router.delete("/delete-application/:id",ApplicationController.deleteAnApplication);

export const ApplicationRoute = router;
