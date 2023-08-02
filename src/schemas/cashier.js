import mongoose from 'mongoose';

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

const Cashier = mongoose.model('cashier', cashierSchema);

export default Cashier;
