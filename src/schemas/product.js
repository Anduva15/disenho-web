import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  category: String,
  type: String,
  price: Number,
  pricePerUnit: Number,
  ingredients: String,
  edibleLine: String,
  edibleClass: String,
  picture: String,
  year: Date,
  measurementUnit: String,
  quantity: Number,
  nationality: String,
  restaurantId: Array,
  provedorId: Array,
  marcaId: String
});

const Product = mongoose.model('product', productSchema);

export default Product;
