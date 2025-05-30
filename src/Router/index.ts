import { Router } from "express";
import { BannerRoutes } from "../modules/Banner/banner.routes";
import { ServiceRouter } from "../modules/Service/service.route";
import { TechnologyRoute } from "../modules/Technologies/technologies.route";
import { StoryRouter } from "../modules/Story/story.route";
import { TeamRouter } from "../modules/Team/team.route";
import { TestimonialRoute } from "../modules/Testimonial/testimonial.route";
import { ProjectRoute } from "../modules/Projects/projects.route";
import { FaqRoute } from "../modules/Faq/faq.route";
import { GalleryRoute } from "../modules/Gallery/gallery.route";
import { ContactRoute } from "../modules/Contact/contact.route";
import { SettingsRoute } from "../modules/WebSettings/settings.route";
import { PositionRoute } from "../modules/OpenPosition/position.route";
import { ApplicationRoute } from "../modules/Applications/application.route";
import { RegistrationRoutes } from "../modules/Auth/Registration/auth.routes";
import { LoginRoutes } from "../modules/Auth/Login/login.routes";
import { passwordChangeRoute } from "../modules/Auth/ChangePassword/changepass.routes";
import { frogetPasswordRoute } from "../modules/Auth/FrogetPassword/frogetPass.route";

const router = Router();

router.use("/banner", BannerRoutes);
router.use("/service", ServiceRouter);
router.use("/technologies", TechnologyRoute);
router.use("/story", StoryRouter);
router.use("/team", TeamRouter);
router.use("/testimonial", TestimonialRoute);
router.use("/project", ProjectRoute);
router.use("/faq", FaqRoute);
router.use("/gallery", GalleryRoute);
router.use("/contact", ContactRoute);
router.use("/settings", SettingsRoute);
router.use("/position", PositionRoute);
router.use("/application", ApplicationRoute);
router.use("/auth/register", RegistrationRoutes);
router.use("/auth/login", LoginRoutes);
router.use("/auth/change-password", passwordChangeRoute);
router.use("/auth/password", frogetPasswordRoute);

export default router;
