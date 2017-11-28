import * as repo from '../repositories/area'
import * as validator from '../validators/area'

export const createArea = (payload) => {

  const req = {
    name : payload.name,
  }

  const error = validator.areaValidator(req);
  
  if(error) {
    throw new Error(error.message);
  }

  return repo.CreateArea(req);
}

export const getAll = () => {
  return repo.GetAll();
}

export const getById = (payload) => {

  return repo.GetById({ _id: payload.id });

}