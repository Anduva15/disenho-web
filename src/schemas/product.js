import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  type: String,
});

const Product = mongoose.model('product', productSchema);

export default Product;
