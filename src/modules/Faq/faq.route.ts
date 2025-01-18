import { Router } from "express";
import { FaqController } from "./faq.controllers";

const router = Router();

router.get("/", FaqController.getFaq);
router.get("/:id", FaqController.getAFaq);
router.post("/create-faq", FaqController.createFaq);
router.patch("/update-faq", FaqController.updateAFaq);
router.delete("/delete-faq", FaqController.deleteAFaq);

export const FaqRoute = router
