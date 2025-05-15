import { z } from "zod";

// Define the Zod schema for creating a banner
export const validateBanner = z
  .object({
    title1: z.string().trim().min(1, "Title 1 is required.").max(17, "Title 1 cannot exceed 17 characters."),
    title2: z.string().trim().min(1, "Title 2 is required.").max(16, "Title 2 cannot exceed 16 characters."),
    subtext: z.string().trim().min(1, "Subtext is required.").max(180, "Subtext cannot exceed 180 characters."),
    activeBanner: z.number().default(1),
    img_url: z.string().trim().url("Please provide a valid URL.").min(1, "Image URL is required."), // Changed nonempty to min(1)
  })
  .strict();

// Define the Zod schema for updating a banner
export const validateBannerUpdate = validateBanner.partial();
