import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'cashier';
autoIncrement.initialize(mongoose.connection);

const cashierSchema = new mongoose.Schema({
  id: String,
  registrationDate: String,
  description: String,
  startingMoney: Number,
  closingMoney: Number,
  cashierOpeningDate: Date,
  cashierClosingDate: Date,
  restaurantId: String,
});

cashierSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Cashier = mongoose.model(model, cashierSchema);

export default Cashier;
