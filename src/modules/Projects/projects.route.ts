import { Router } from "express";
import { ProjectController } from "./projects.controllers";
import { permission } from "../../utils";

const router = Router();
router.get("/", ProjectController.getProjects);
router.get("/:id", ProjectController.getAProject);
router.post("/create-project",  ProjectController.createProject);
router.patch("/update-project/:id",  ProjectController.updateAProject);
router.delete("/delete-project/:id",  ProjectController.deleteAProject);
// router.post("/create-project", permission.bothAdmins, ProjectController.createProject);
// router.patch("/update-project/:id", permission.bothAdmins, ProjectController.updateAProject);
// router.delete("/delete-project/:id", permission.bothAdmins, ProjectController.deleteAProject);

export const ProjectRoute = router;
