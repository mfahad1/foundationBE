import * as repo from '../repositories/district'
// import * as validator from '../validators/d'

export const create = (payload) => {

  const req = {
    name: payload.name,
    areaId: payload.areaId,
    categoryId: payload.categoryId,
    priceAvg: payload.priceAvg,
    priceCategory: payload.priceCategory,
    priceGeneral: payload.priceGeneral,
    priceEffective: payload.priceEffective
  }


  return repo.create(req);
}

export const insertCategory = (payload) => {

  const req = {
    districtId: payload.id,
    categoryId: payload.categoryId,
    priceAvg: payload.priceAvg,
    priceCategory: payload.priceCategory,
    priceGeneral: payload.priceGeneral,
    priceEffective: payload.priceEffective
  }

  return repo.insertCategory(req);
}

export const updateCategory = (payload) => {
  
    const req = {
      districtId: payload.id,
      categoryId: payload.categoryId,
      priceAvg: payload.priceAvg,
      priceCategory: payload.priceCategory,
      priceGeneral: payload.priceGeneral,
      priceEffective: payload.priceEffective
    }
  
    return repo.updateCategory(req);
  }

export const getAll = () => {
  return repo.getAll();
}

export const getById = (payload) => {

  return repo.get({ _id: payload.id });

}

export const getByAreaId = (payload) => {
  
  return repo.get({ areaId: payload.id });

}