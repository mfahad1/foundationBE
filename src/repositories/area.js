import areaModel from '../model/area';

export const CreateArea = (payload) => {
  const area = new areaModel(payload);
  return area.save();
}

export const FindArea = (payload) => {
  return new areaModel.findOne(payload);
}

export const GetAll = () => {
  return areaModel.find({});
}

export const GetById = (payload) => {
  console.log('payload in repo', payload);
  return areaModel.findOne(payload)
}