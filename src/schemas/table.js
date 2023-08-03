import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'table';
autoIncrement.initialize(mongoose.connection);

const tableSchema = new mongoose.Schema({
  id: String,
  name: String,
  tableNumber: Number,
  capacity: Number,
  restaurantId: String,
  isAvailable: Boolean,
});

tableSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Table = mongoose.model(model, tableSchema);

export default Table;
