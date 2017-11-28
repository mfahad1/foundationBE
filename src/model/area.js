import mongoose from '../config/database';

const schema = mongoose.Schema({
  name: String,
})

export default mongoose.model('area', schema);