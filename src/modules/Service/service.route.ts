import { Router } from "express";
import { ServiceController } from "./service.controllers";

const router = Router();
router.get("/", ServiceController.getServices);
router.get("/:id", ServiceController.getAService);
router.post("/create-service", ServiceController.createService);
router.patch("/update-service/:id", ServiceController.updateAService);
router.delete("/delete-service/:id", ServiceController.deleteAService);

export const ServiceRouter = router