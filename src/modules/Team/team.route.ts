import { Router } from "express";
import { TeamController } from "./team.controllers";

const router = Router();
router.get("/", TeamController.getTeam);
router.get("/:id", TeamController.getATeam);
router.post("/create-member", TeamController.createTeam);
router.patch("/update-member/:id", TeamController.updateATeam);
router.delete("/delete-member/:id", TeamController.deleteATeam);

export const TeamRouter = router;
