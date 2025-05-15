import { Router } from "express";
import { ContactController } from "./contact.controllers";
import { permission } from "../../utils";

const router = Router();

router.get("/", ContactController.getContact);
router.post("/create-contact", ContactController.createContact);
router.patch("/update-contact/:id", ContactController.updateAContact);
// router.post("/create-contact",permission.bothAdmins, ContactController.createContact);
// router.patch("/update-contact/:id",permission.bothAdmins, ContactController.updateAContact);

export const ContactRoute = router;
