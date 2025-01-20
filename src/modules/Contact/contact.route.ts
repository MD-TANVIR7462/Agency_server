import { Router } from "express";
import { ContactController } from "./contact.controllers";

const router = Router();

router.get("/", ContactController.getContact);
router.post("/create-contact", ContactController.createContact);
router.patch("/update-contact/:id", ContactController.updateAContact);

export const ContactRoute = router;
