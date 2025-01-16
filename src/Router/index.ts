import { Router } from "express";
import { BannerRoutes } from "../modules/Banner/banner.routes";
import { ServiceRouter } from "../modules/Service/service.route";
import { TechnologyRoute } from "../modules/Technologies/technologies.route";
import { StoryRouter } from "../modules/Story/story.route";
const router = Router();

router.use("/banner", BannerRoutes);
router.use("/service", ServiceRouter);
router.use("/technologies", TechnologyRoute);
router.use("/story", StoryRouter);
export default router;
