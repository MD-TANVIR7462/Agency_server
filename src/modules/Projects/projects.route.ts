import { Router } from "express";
import { ProjectController } from "./projects.controllers";

const router = Router();
router.get("/", ProjectController.getProjects);
router.get("/:id", ProjectController.getAProject);
router.post("/create-project", ProjectController.createProject);
router.patch("/update-project/:id", ProjectController.updateAProject);
router.delete("/delete-project/:id", ProjectController.deleteAProject);

export const ProjectRoute = router;
