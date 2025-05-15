import { Router } from "express";
import { TestimonialController } from "./testimonial.controllers";
import { permission } from "../../utils";

const router = Router();
router.get("/", TestimonialController.getTestimonial);
// router.get("/status-testimonial", TestimonialController.getStatusTestimonial);
router.get("/:id", TestimonialController.getATestimonial);
router.post("/create-testimonial", TestimonialController.createTestimonial);
router.patch("/update-testimonial/:id", TestimonialController.updateATestimonial);
router.delete("/delete-testimonial/:id", TestimonialController.deleteATestimonial);
// router.patch("/update-testimonial/:id", permission.bothAdmins, TestimonialController.updateATestimonial);
// router.delete("/delete-testimonial/:id", permission.bothAdmins, TestimonialController.deleteATestimonial);

export const TestimonialRoute = router;
