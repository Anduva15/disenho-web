import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  phone: String,
  amountClients: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
