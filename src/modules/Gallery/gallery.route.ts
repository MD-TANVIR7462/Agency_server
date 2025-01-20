import { Router } from "express";
import { GalleryController } from "./gallery.controllers";

const router = Router();

router.get("/", GalleryController.getGallery);
router.get("/:id", GalleryController.getAGallery);
router.post("/create-gallery", GalleryController.createGallery);
router.patch("/update-gallery/:id", GalleryController.updateAGallery);
router.delete("/delete-gallery/:id", GalleryController.deleteAGallery);

export const GalleryRoute = router;
