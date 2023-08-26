import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'client';
autoIncrement.initialize(mongoose.connection);

const clientSchema = new mongoose.Schema({
  id: String,
  name: String,
  amountPayed: String,
  products: Array,
  productsPrice: Array,
  restaurantId: String,
  status: String,
  name: String,
});

clientSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

clientSchema.set('timestamps', {
  createdAt: 'crdAt',
  updatedAt: 'updAt',
});

const Client = mongoose.model(model, clientSchema);

export default Client;
