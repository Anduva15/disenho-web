import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  country: String,
  company: String,
  phoneNumber: String,
});

const Brand = mongoose.model('brand', brandSchema);

export default Brand;
