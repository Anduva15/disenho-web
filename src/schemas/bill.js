import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'bill';
autoIncrement.initialize(mongoose.connection);

const billSchema = new mongoose.Schema({
  id: String,
  totalAmount: Number,
  clients: Array,
  entryDate: Date,
  exitDate: Date,
  reservationDate: Date,
  reservationId: String,
  bar: Boolean,
  restaurantId: String,
  status: String,
});

billSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Bill = mongoose.model(model, billSchema);

export default Bill;
