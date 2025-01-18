import { TProject } from "./projects.interface";
import { ProjectModel } from "./projects.model";

const getProjects = async (variant?: string) => {
  const query: Record<string, any> = {
    isActive: true,
    isDeleted: false,
  };
  if (variant !== undefined) {
    query.category = variant;
  }
  const result = await ProjectModel.find(query).select("-isDeleted -__v");
  return result;
};


const getAProject = async (id: string) => {
  const result = await ProjectModel.findOne({
    _id: id,
    isActive: true,
    isDeleted: false,
  }).select("-__v -isDeleted");
  console.log(result);
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
