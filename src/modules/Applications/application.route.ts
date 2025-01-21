import { Router } from "express";
import { ApplicationController } from "./application.controller";



const router = Router();
router.get("/", ApplicationController.getApplications);
router.get("/:id", ApplicationController.getAnApplication);
router.post("/create-Position", ApplicationController.createApplication);
router.patch("/update-Position/:id", ApplicationController.updateAnApplication);
router.delete("/delete-Position/:id", ApplicationController.deleteAnApplication);

export const PositionRoute = router;
