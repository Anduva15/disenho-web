import mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
  id: String,
  name: String,
  tableNumber: Number,
  capacity: Number,
  restaurantId: String,
  isAvailable: Boolean,
});

const Table = mongoose.model('table', tableSchema);

export default Table;
