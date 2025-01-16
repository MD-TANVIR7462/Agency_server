import { Router } from "express";
import { StoryControllers } from "./story.controllers";

const router = Router();

router.get("/", StoryControllers.getStory);
router.post("/create-story", StoryControllers.createStory);
router.patch("/update-story/:id", StoryControllers.updateStory);

export const StoryRouter = router;
