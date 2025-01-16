import { TProject } from "./projects.interface";
import { ProjectModel } from "./projects.model";

const getProjects = async () => {
  const result = await ProjectModel.find({
    isActive: true,
    isDeleted: false,
  }).select("-__v");
  return result;
};
const getWebProjects = async () => {
  const result = await ProjectModel.find({
    isActive: true,
    isDeleted: false,
    category: "Web Development",
  }).select("-__v");
  return result;
};
const getAppProjects = async () => {
  const result = await ProjectModel.find({
    isActive: true,
    isDeleted: false,
    category: "Web Apps",
  }).select("-__v");
  return result;
};
const getGraphicsProjects = async () => {
  const result = await ProjectModel.find({
    isActive: true,
    isDeleted: false,
    category: "Graphics",
  }).select("-__v");
  return result;
};

const getAProject = async (id: string) => {
  const result = await ProjectModel.findById(id).select("-__v");
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
    { $set: { isDeleted: true } },
    { new: true }
  );
  return result;
};

export const ProjectServices = {
  getProjects,
  getWebProjects,
  getAppProjects,
  getGraphicsProjects,
  getAProject,
  createProject,
  updateAProject,
  deleteAProject,
};
