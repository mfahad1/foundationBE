import mongoose from '../config/database';

const schema = mongoose.Schema({
  name: String,
  category: [
    { 
      categoryName : String, 
      priceAvg: String,
      priceCategory: String,
      priceGeneral: String,
      priceEffective: String
    }
  ],
  areaId: String
})

export default mongoose.model('district', schema);