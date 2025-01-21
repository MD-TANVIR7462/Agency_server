import { ObjectId } from "mongoose";

export type TApplication = {
  positionId: ObjectId|string;
  fullName: string;
  email: string;
  phone: string;
  linkedIn?: string;
  portfolio?: string;
  resumeUrl: string;
  isPending?: boolean;
  isDeleted?: boolean;
  isSelected?: boolean;
  isRejected?: boolean;
};
