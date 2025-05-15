import { Router } from "express";
import { TeamController } from "./team.controllers";
import { permission } from "../../utils";

const router = Router();
router.get("/", TeamController.getTeam);
router.get("/:id", TeamController.getATeam);
router.post("/create-member",  TeamController.createTeam);
router.patch("/update-member/:id",  TeamController.updateATeam);
router.delete("/delete-member/:id",  TeamController.deleteATeam);
// router.post("/create-member", permission.bothAdmins, TeamController.createTeam);
// router.patch("/update-member/:id", permission.bothAdmins, TeamController.updateATeam);
// router.delete("/delete-member/:id", permission.bothAdmins, TeamController.deleteATeam);

export const TeamRouter = router;
