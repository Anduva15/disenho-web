import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'product';
autoIncrement.initialize(mongoose.connection);

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
  providerId: Array,
  brandId: String,
});

productSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Product = mongoose.model(model, productSchema);

export default Product;
