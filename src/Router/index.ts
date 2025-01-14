import express, { Router } from "express";
import { BannerRoutes } from "../modules/Banner/banner.routes";
import { routeError } from "../ErrorHandlers/RouteError";
const router = Router();

router.use("/banner", BannerRoutes);

export default router;
