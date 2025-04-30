import { userRole } from "../Constant";
import { authMiddleware } from "../MiddleWears/authMiddleWare";

const bothAdmins = authMiddleware(userRole.superadmin, userRole.admin);
const admin = authMiddleware(userRole.admin);
const superAdmin = authMiddleware(userRole.superadmin);

export const permission = {
  bothAdmins,
  admin,
  superAdmin,
};

export const isPasswordChange = (utcPass: Date, jwtPass: number) => {
  const passwordChangedAt = Math.floor(new Date(utcPass).getTime() / 1000);
  return passwordChangedAt > jwtPass;
};
