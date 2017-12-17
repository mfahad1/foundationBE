import * as repo from '../repositories/category'
import * as validator from '../validators/category'

export const create = (payload) => {

  const req = {
    name: payload.name,
    areaId: payload.areaId
  }

  const error = validator.categoryValidator(req);
  
  if(error) {
    throw new Error(error.message);
  }

  return repo.create(req);
}

export const getAll = () => {
  return repo.getAll();
}

export const getById = (payload) => {

  return repo.get({ _id: payload.id });

}

export const getByAreaId = (payload) => {
  
  return repo.getAll({ areaId: payload.id });

}