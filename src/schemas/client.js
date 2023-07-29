import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  id: String,
  name: String,
  amountPayed: String,
  products: Array,
  productsPrice: Array,
  restaurantId: String,
  status: String,
  name: String
});

const Client = mongoose.model('client', clientSchema);

export default Client;
