import { Router } from "express";
import { TechnologyController } from "./technologies.controllers";

const router = Router();
router.get("/", TechnologyController.getTechnology);
router.get("/:id", TechnologyController.getATechnology);
router.post("/create-technology", TechnologyController.createTechnology);
router.patch("/update-technology/:id", TechnologyController.updateATechnology);
router.delete("/delete-technology/:id", TechnologyController.deleteATechnology);

export const TechnologyRoute = router;
