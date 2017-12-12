import mongoose from '../config/database';

const schema = mongoose.Schema({
  email: String,
  password: String,
  phone: String
})

export default mongoose.model('user', schema);