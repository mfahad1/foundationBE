import categoryModal from '../model/category';

export const create = (payload) => {
  const category = new categoryModal(payload);
  return category.save();
}

export const get = (payload) => {
  return categoryModal.findOne(payload);
}

export const getAll = (param = {}) => {
  return categoryModal.find(param);
}
