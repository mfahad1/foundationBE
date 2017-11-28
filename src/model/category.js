import mongoose from '../config/database';

const schema = mongoose.Schema({
  name: String,
  areaId: String
})

export default mongoose.model('category', schema);