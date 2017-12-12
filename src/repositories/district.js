import districtModal from '../model/district';
import categoryModal from '../model/category';

export const create = async (payload) => {

  let districtObj = {
    name: payload.name,
    areaId: payload.areaId,
    category: []
  }

  districtObj = new districtModal(districtObj);

  if( payload.categoryId ) {
    const category = await categoryModal.findOne({ _id: payload.categoryId });
    console.log('in repo category' , category);
    districtObj.category.push({
      categoryName: category.name,
      priceAvg: payload.priceAvg,
      priceCategory: payload.priceCategory,
      priceGeneral: payload.priceGeneral,
      priceEffective: payload.priceEffective 
    })
    // console.log('in repo payload.categoryId  ' , payload );
  }

  return districtObj.save();
}

export const insertCategory = async (payload) => {

  const category = await categoryModal.findOne({ _id: payload.categoryId });
  const categoryObj = {
    _id: category._id,
    categoryName: category.name,
    priceAvg: payload.priceAvg,
    priceCategory: payload.priceCategory,
    priceGeneral: payload.priceGeneral,
    priceEffective: payload.priceEffective 
  }

  return districtModal.update(
      { _id: payload.districtId }, 
      { $push: { category: categoryObj } }
  );
}

export const updateCategory = async (payload) => {
  console.log('payylad', payload);
  return districtModal.findOneAndUpdate(
    { _id: payload.districtId, 'category._id': payload.categoryId }, 
    { $set: { 
      "category.$.priceAvg": payload.priceAvg,
      "category.$.priceCategory": payload.priceCategory,
      "category.$.priceGeneral": payload.priceGeneral,
      "category.$.priceEffective": payload.priceEffective,
    } },
    { new: true }
  );
}

export const get = (payload) => {
  return districtModal.findOne(payload);
}

export const getAll = () => {
  return districtModal.find({});
}


export const getDistrictByCategory = ({ categoryQuery }) => {
  console.log('categoryQuery', regexMaker(categoryQuery));
  return districtModal.find({ category: { $elemMatch: { categoryName: regexMaker(categoryQuery) } } }, { "category.$": 1, "areaId": 1, "name": 1 })

}

export const getDistrictByName = ({ districtQuery }) => {
  return districtModal.find({ name: regexMaker(districtQuery) })
}

const regexMaker = (query) => {
  return new RegExp('\.*' + query + '\.*', 'i')
}