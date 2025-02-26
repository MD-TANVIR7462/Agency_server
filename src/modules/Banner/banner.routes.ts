import { Router } from "express";
import { BannerController } from "./banner.controller";
import { permission } from "../../utils";

const router = Router();

router.get("/", BannerController.getBanner);
router.post("/create-banner", BannerController.createBanner);
router.patch("/update-banner/:id",  BannerController.updateBanner);

export const BannerRoutes = router;
