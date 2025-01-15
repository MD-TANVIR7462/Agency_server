import { Router } from "express";
import express from "express";
import { BannerController } from "./banner.controller";
const router = Router();

router.get("/", BannerController.getBanner);
router.post("/create-banner", BannerController.createBanner);
router.patch("/update-banner/:id", BannerController.updateBanner);

export const BannerRoutes = router;
