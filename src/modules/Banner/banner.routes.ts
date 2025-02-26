import { Router } from "express";
import { BannerController } from "./banner.controller";
import { authMiddleware } from "../../MiddleWears/authMiddleWare";
const router = Router();

router.get("/",authMiddleware, BannerController.getBanner);
router.post("/create-banner",authMiddleware, BannerController.createBanner);
router.patch("/update-banner/:id",authMiddleware, BannerController.updateBanner);

export const BannerRoutes = router;
