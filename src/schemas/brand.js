import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'brand';
autoIncrement.initialize(mongoose.connection);

const brandSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  country: String,
  company: String,
  phoneNumber: String,
});

brandSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Brand = mongoose.model(model, brandSchema);

export default Brand;
