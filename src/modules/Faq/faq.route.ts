import { Router } from "express";
import { FaqController } from "./faq.controllers";
import { permission } from "../../utils";

const router = Router();

router.get("/", FaqController.getFaq);

router.get("/:id", FaqController.getAFaq);
router.post("/create-faq", permission.bothAdmins, FaqController.createFaq);
router.patch("/update-faq/:id", permission.bothAdmins, FaqController.updateAFaq);
router.delete("/delete-faq/:id", permission.bothAdmins, FaqController.deleteAFaq);

export const FaqRoute = router;
