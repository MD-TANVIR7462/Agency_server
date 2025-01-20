import { Router } from "express";
import { FaqController } from "./gallery.controllers";

const router = Router();

router.get("/", FaqController.getFaq);
router.get("/:id", FaqController.getAFaq);
router.post("/create-faq", FaqController.createFaq);
router.patch("/update-faq/:id", FaqController.updateAFaq);
router.delete("/delete-faq/:id", FaqController.deleteAFaq);

export const FaqRoute = router
