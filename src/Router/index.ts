import { Router } from "express";
import { BannerRoutes } from "../modules/Banner/banner.routes";
import { ServiceRouter } from "../modules/Service/service.route";
import { TechnologyRoute } from "../modules/Technologies/technologies.route";
import { StoryRouter } from "../modules/Story/story.route";
import { TeamRouter } from "../modules/Team/team.route";
import { TestimonialRoute } from "../modules/Testimonial/testimonial.route";
const router = Router();

router.use("/banner", BannerRoutes);
router.use("/service", ServiceRouter);
router.use("/technologies", TechnologyRoute);
router.use("/story", StoryRouter);
router.use("/team", TeamRouter);
router.use("/testimonial", TestimonialRoute);
export default router;
