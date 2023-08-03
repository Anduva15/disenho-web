import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'country';
autoIncrement.initialize(mongoose.connection);

const countrySchema = new mongoose.Schema({
  id: String,
  countryName: String,
});

countrySchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Country = mongoose.model(model, countrySchema);

export default Country;
