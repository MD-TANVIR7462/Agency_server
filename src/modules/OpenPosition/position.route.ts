import { Router } from "express";
import { PositionController } from "./position.controllers";
import { permission } from "../../utils";


const router = Router();
router.get("/", PositionController.getPositions);
router.get("/:id", PositionController.getAPosition);
router.post("/create-position", PositionController.createPosition);
router.patch("/update-position/:id",  PositionController.updateAPosition);
router.delete("/delete-position/:id", PositionController.deleteAPosition);
// router.post("/create-position", permission.bothAdmins, PositionController.createPosition);
// router.patch("/update-position/:id", permission.bothAdmins, PositionController.updateAPosition);
// router.delete("/delete-position/:id", permission.bothAdmins, PositionController.deleteAPosition);

export const PositionRoute = router;
