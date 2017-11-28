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
      category: category.name,
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
    category: category.name,
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
