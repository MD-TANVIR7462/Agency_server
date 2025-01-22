import { z } from "zod";

export const validatePosition = z
  .object({
    applicationID: z.array(z.string()).optional().default([]),
    title: z
      .string()
      .min(3, "Title must be at least 3 characters long.")
      .max(50, "Title cannot exceed 50 characters.")
      .trim()
      .nonempty("Title is required."),
    department: z
      .string()
      .min(3, "Department must be at least 3 characters long.")
      .max(30, "Department cannot exceed 30 characters.")
      .trim()
      .nonempty("Department is required."),
    location: z
      .string()
      .min(3, "Location must be at least 3 characters long.")
      .max(30, "Location cannot exceed 30 characters.")
      .trim()
      .nonempty("Location is required."),
    type: z.enum(["Full-time", "Part-time", "Contract", "Internship"], {
      errorMap: () => {
        return { message: "Job type is required." };
      },
    }),
    salary: z.string().optional().default("Negotiable"),
    tags: z
      .array(z.string().nonempty("Tag is required."))
      .nonempty("At least one tag is required."),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters long.")
      .max(250, "Description cannot exceed 250 characters.")
      .trim()
      .nonempty("Description is required."),
    requirements: z
      .array(z.string().nonempty("Requirement is required."))
      .nonempty("Requirements are required."),
    responsibilities: z
      .array(z.string().nonempty("Responsibility is required."))
      .nonempty("Responsibilities are required."),
    benefits: z
      .array(z.string().nonempty("Benefit is required."))
      .nonempty("Benefits are required."),
    isActive: z.boolean().optional().default(true),
    isDeleted: z.boolean().optional().default(false),
  })
  .strict();
export const validateUpdatePosition = validatePosition.partial();
