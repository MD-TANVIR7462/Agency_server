import { Router } from "express";
import { TechnologyController } from "./technologies.controllers";
import { permission } from "../../utils";

const router = Router();
router.get("/", TechnologyController.getTechnology);
router.get("/:id", TechnologyController.getATechnology);
router.post("/create-technology", TechnologyController.createTechnology);
router.patch("/update-technology/:id", TechnologyController.updateATechnology);
router.delete("/delete-technology/:id", TechnologyController.deleteATechnology);
// router.post("/create-technology", permission.bothAdmins, TechnologyController.createTechnology);
// router.patch("/update-technology/:id", permission.bothAdmins, TechnologyController.updateATechnology);
// router.delete("/delete-technology/:id", permission.bothAdmins, TechnologyController.deleteATechnology);

export const TechnologyRoute = router;
