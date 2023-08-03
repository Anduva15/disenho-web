import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'measurementUnit';
autoIncrement.initialize(mongoose.connection);

const measurementUnitSchema = new mongoose.Schema({
  id: String,
  address: String,
  phoneNumber: Number,
  clientsQuantity: Number,
});

measurementUnitSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const MeasurementUnit = mongoose.model(
  'measurementUnit',
  measurementUnitSchema
);

export default MeasurementUnit;
