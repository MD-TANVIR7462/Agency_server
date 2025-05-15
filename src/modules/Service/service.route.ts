import { Router } from "express";
import { ServiceController } from "./service.controllers";
import { permission } from "../../utils";

const router = Router();
router.get("/", ServiceController.getServices);
router.get("/:id", ServiceController.getAService);
router.post("/create-service", ServiceController.createService);
router.patch("/update-service/:id", ServiceController.updateAService);
router.delete("/delete-service/:id", ServiceController.deleteAService);
// router.post("/create-service", permission.bothAdmins, ServiceController.createService);
// router.patch("/update-service/:id", permission.bothAdmins, ServiceController.updateAService);
// router.delete("/delete-service/:id", permission.bothAdmins, ServiceController.deleteAService);

export const ServiceRouter = router