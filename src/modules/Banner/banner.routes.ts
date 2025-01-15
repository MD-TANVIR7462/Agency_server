import { Router } from "express";
import express from "express";
import { BannerController } from "./banner.controller";
const router = Router();

router.get("/",BannerController.getBanner);
router.post("/create-banner", BannerController.createBanner);
router.patch("/");
router.delete("/");

export const BannerRoutes = router;
