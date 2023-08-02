import mongoose from 'mongoose';

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

const Account = mongoose.model('account', accountSchema);

export default Account;
