import { Router } from "express";
import { PositionController } from "./position.controllers";


const router = Router();
router.get("/", PositionController.getPositions);
router.get("/:id", PositionController.getAPosition);
router.post("/create-Position", PositionController.createPosition);
router.patch("/update-Position/:id", PositionController.updateAPosition);
router.delete("/delete-Position/:id", PositionController.deleteAPosition);

export const PositionRoute = router;
