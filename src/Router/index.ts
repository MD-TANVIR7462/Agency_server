import { Router } from "express";
import { BannerRoutes } from "../modules/Banner/banner.routes";
import { ServiceRouter } from "../modules/Service/service.route";
const router = Router();

router.use("/banner", BannerRoutes);
router.use("/service", ServiceRouter);

export default router;
