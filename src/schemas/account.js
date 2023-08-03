import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'account';
autoIncrement.initialize(mongoose.connection);

const accountSchema = new mongoose.Schema({
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

accountSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Account = mongoose.model(model, accountSchema);

export default Account;
