import { TApplication } from "./application.interface";
import { ApplicationModel } from "./application.model";

const getApplications = async (queryData: any) => {
  const excludeQuery = { ...queryData };
  const deletedQuery = ["limit", "page"];
  const limit = queryData.limit || 10;
  deletedQuery.forEach((element) => delete excludeQuery[element]);

  const paginationQuery =
    ((queryData.page ? Number(queryData.page) : 1) - 1) *
    (queryData.limit ? Number(queryData.limit) : 10);

  console.log(paginationQuery);
  const query: Record<string, any> = {
    isDeleted: false,
    ...excludeQuery,
  };
  const result = await ApplicationModel.find(query)
    .select("-isDeleted -__v")
    .skip(paginationQuery)
    .limit(limit);
  return result;
};

const getAnApplication = async (id: string) => {
  const result = await ApplicationModel.findOne({
    _id: id,
    isDeleted: false,
  }).select("-__v -isDeleted");
  return result;
};

const createApplication = async (data: TApplication) => {
  const result = await ApplicationModel.create(data);
  return result;
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
        isPending: !application.isPending,
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
        isPending: !application.isPending,
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
