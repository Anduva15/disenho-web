import mongoose from 'mongoose';

const measurementUnitSchema = new mongoose.Schema({
  id: String,
  address: String,
  phoneNumber: Number,
  clientsQuantity: Number,
});

const MeasurementUnit = mongoose.model(
  'measurementUnit',
  measurementUnitSchema
);

export default MeasurementUnit;
