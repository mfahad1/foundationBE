import mongoose from '../config/database';

const schema = mongoose.Schema({
  districtId: String,
  categoryId: String,
  priceAvg: String,
  priceCategory: String,
  priceGeneral: String,
  priceEffective: String
})

export default mongoose.model('scheme', schema);