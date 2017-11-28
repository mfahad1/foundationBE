
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
export const connect = () => {
  mongoose.connect('mongodb://localhost/foundation' , { useMongoClient: true })
    .then(() => {
      console.log('connected');
    }, err => {
      console.log('some error occured', err);
    });
}

export default mongoose;