import { TStory } from "./story.interface";
import { StoryModel } from "./story.model";

const getStory = async () => {
  const result = await StoryModel.find();
  return result;
};

const createStory = async (data: TStory) => {
  const result = await StoryModel.create(data);
  return result;
};

const updateStory = async (id: string, data: Partial<TStory>) => {
  const result = await StoryModel.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true }
  );
  return result;
};

export const StoryServices = {
  getStory,
  createStory,
  updateStory,
};
