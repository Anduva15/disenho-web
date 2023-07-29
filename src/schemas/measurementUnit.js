import mongoose from 'mongoose';

const measurementUnitSchema = new mongoose.Schema({
    id: String,
    address: String,
    phoneNumber: Number,
    clientsQuantity: Number
});

const MeasurementUnit = mongoose.model('measurementUnits', measurementUnitSchema);

export default MeasurementUnit;
