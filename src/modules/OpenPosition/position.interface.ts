import { Types } from "mongoose";

export type TPosition = {
  applications?: Types.ObjectId[];
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  tags: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  isActive: boolean;
  isDeleted: boolean;
  salary?: string;
};
