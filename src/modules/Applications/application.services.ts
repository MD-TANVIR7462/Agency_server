import { sendConfirmationEmail } from "../../utils/SendConfirmationEmail";
import { sendNotificationToAdminEmail } from "../../utils/sendNotificationMailtoAdmin";
import { PositionModel } from "../OpenPosition/position.model";
import { PositionServices } from "../OpenPosition/position.services";
import { TApplication } from "./application.interface";
import { ApplicationModel } from "./application.model";

import mongoose from "mongoose";

const getApplications = async (queryData: any) => {
  const { page = 1, limit = 25, status, positionId, ...restFilters } = queryData;

  const skip = (Number(page) - 1) * Number(limit);

  const query: Record<string, any> = {
    ...restFilters,
  };

  // Apply status filter
  if (status && status !== "all") {
    if (status === "pending") {
      query.isPending = true;
    } else if (status === "selected") {
      query.isSelected = true;
    } else if (status === "rejected") {
      query.isRejected = true;
    }
  }

  // Convert positionId to ObjectId
  if (positionId && mongoose.Types.ObjectId.isValid(positionId)) {
    query.positionId = new mongoose.Types.ObjectId(positionId);
  }

  const [results, total] = await Promise.all([
    ApplicationModel.find(query).select("-isDeleted -__v").skip(skip).limit(Number(limit)),
    ApplicationModel.countDocuments(query),
  ]);

  return {
    data: results,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit)),
    },
  };
};

const getAnApplication = async (id: string) => {
  const result = await ApplicationModel.findOne({
    _id: id,
    isDeleted: false,
  }).select("-__v -isDeleted");
  return result;
};
//!Without transaction rollback---->
// const createApplication = async (data: TApplication) => {
//   const findPosition = await PositionServices.getAPosition(
//     data.positionId as string
//   );
//   if (!findPosition) {
//     return null;
//   }
//   const result = await ApplicationModel.create(data);
//   if (!result) {
//     return null;
//   }
//   if (result.positionId && findPosition.applications) {
//     findPosition.applications.push(result._id);
//     await PositionServices.updateAPosition(data.positionId as string, {
//       applications: findPosition.applications,
//     });
//   }

//   return result;
// };

// !with transaction rollback ---->
const createApplication = async (data: TApplication) => {
  const session = await ApplicationModel.startSession();
  session.startTransaction();

  try {
    const findPosition = await PositionModel.findOne({ isDeleted: false, isActive: true, _id: data.positionId });
    if (!findPosition) {
      await session.abortTransaction();
      session.endSession();
      return null;
    }

    const result = await ApplicationModel.create([data], { session });
    if (!result?.length) {
      await session.abortTransaction();
      session.endSession();
      return null;
    }

    findPosition.applications?.push(result[0]._id);
    await PositionServices.updateAPosition(
      data.positionId as string,
      {
        applications: findPosition.applications,
      },
      session
    );
    //?maill to the Applicant
    sendConfirmationEmail(data.email, data.fullName, findPosition.title, data.resumeUrl);

    //?mail to the admin / recruiter email
    sendNotificationToAdminEmail(data.fullName, findPosition.title, data.resumeUrl);

    await session.commitTransaction();
    session.endSession();
    return result[0];
  } catch (error) {
    
    await session.abortTransaction();
    session.endSession();
    return null
  }
};

const selectApplication = async (id: string) => {
  const application = await ApplicationModel.findById(id);
  if (!application) {
    return null;
  }
  const updatedResult = await ApplicationModel.findByIdAndUpdate(
    id,
    {
      $set: {
        isSelected: !application.isSelected,
        isPending: false,
        isRejected: false,
      },
    },
    { new: true }
  );
  return updatedResult;
};

const rejectApplication = async (id: string) => {
  const application = await ApplicationModel.findById(id);
  if (!application) {
    return null;
  }
  const updatedResult = await ApplicationModel.findByIdAndUpdate(
    id,
    {
      $set: {
        isPending: false,
        isRejected: !application.isRejected,
        isSelected: false,
      },
    },
    { new: true }
  );
  return updatedResult;
};

const deleteAnApplication = async (id: string) => {
  const result = await ApplicationModel.findByIdAndDelete(id);
  return result;
};

export const ApplicationServices = {
  getApplications,
  getAnApplication,
  createApplication,
  deleteAnApplication,
  selectApplication,
  rejectApplication,
};
