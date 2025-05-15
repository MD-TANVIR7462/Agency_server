import { Router } from "express";
import { StoryControllers } from "./story.controllers";
import { permission } from "../../utils";

const router = Router();

router.get("/", StoryControllers.getStory);
// router.post("/create-story", permission.bothAdmins, StoryControllers.createStory);
// router.patch("/update-story/:id", permission.bothAdmins, StoryControllers.updateStory);
router.post("/create-story",  StoryControllers.createStory);
router.patch("/update-story/:id",  StoryControllers.updateStory);

export const StoryRouter = router;
