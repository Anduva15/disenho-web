import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'restaurant';
autoIncrement.initialize(mongoose.connection);

const restaurantSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  phone: String,
  clientsAmount: Number,
});

restaurantSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Restaurant = mongoose.model(model, restaurantSchema);

export default Restaurant;
