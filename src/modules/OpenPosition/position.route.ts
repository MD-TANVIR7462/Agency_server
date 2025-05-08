import { Router } from "express";
import { PositionController } from "./position.controllers";


const router = Router();
router.get("/", PositionController.getPositions);
router.get("/:id", PositionController.getAPosition);
router.post("/create-position", PositionController.createPosition);
router.patch("/update-position/:id", PositionController.updateAPosition);
router.delete("/delete-position/:id", PositionController.deleteAPosition);

export const PositionRoute = router;
