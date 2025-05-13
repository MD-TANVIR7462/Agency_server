import { Router } from "express";
import { GalleryController } from "./gallery.controllers";
import { permission } from "../../utils";

const router = Router();

router.get("/", GalleryController.getGallery);
router.get("/:id",  GalleryController.getAGallery);
router.post("/create-gallery", permission.bothAdmins, GalleryController.createGallery);
router.patch("/update-gallery/:id", permission.bothAdmins, GalleryController.updateAGallery);
router.delete("/delete-gallery/:id", permission.bothAdmins, GalleryController.deleteAGallery);

export const GalleryRoute = router;
