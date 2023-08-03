import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'provider';
autoIncrement.initialize(mongoose.connection);

const providerSchema = new mongoose.Schema({
  id: String,
  name: String,
  firstName: String,
  lastName: String,
  officePhoneNumber: String,
  fax: String,
  mobileNumber: String,
  picture: String,
  address: String,
  brands: Array,
});

providerSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Provider = mongoose.model(model, providerSchema);

export default Provider;
