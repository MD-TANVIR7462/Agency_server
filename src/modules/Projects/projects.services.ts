import { TProject } from "./projects.interface";
import { ProjectModel } from "./projects.model";

const getProjects = async (queryData: any) => {
  const query: Record<string, any> = {
    isDeleted: false,
  };
  if (queryData?.category !== undefined) {
    query.category = queryData.category;
  }
  if (queryData?.isActive !== undefined) {
    query.isActive = queryData.isActive;
  }
  if (queryData?.isFeatured !== undefined) {
    query.isFeatured = queryData.isFeatured;
  }
  const result = await ProjectModel.find(query).select("-isDeleted -__v").sort("-createdAt");
  return result;
};

const getAProject = async (id: string) => {
  const result = await ProjectModel.findOne({
    _id: id,
    isActive: true,
    isDeleted: false,
  }).select("-__v -isDeleted");
  return result;
};

const createProject = async (data: TProject) => {
  const result = await ProjectModel.create(data);
  return result;
};

const updateAProject = async (id: string, data: Partial<TProject>) => {
  const result = await ProjectModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};

const deleteAProject = async (id: string) => {
  const result = await ProjectModel.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true, isActive: false } },
    { new: true }
  );
  return result;
};

export const ProjectServices = {
  getProjects,
  getAProject,
  createProject,
  updateAProject,
  deleteAProject,
};
