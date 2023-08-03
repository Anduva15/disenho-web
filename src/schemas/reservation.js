import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'reservation';
autoIncrement.initialize(mongoose.connection);

const reservationSchema = new mongoose.Schema({
  id: String,
  name: String,
  date: Date,
  clientsQuantity: Number,
  restaurantId: String,
  tableId: String,
});

reservationSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Reservation = mongoose.model(model, reservationSchema);

export default Reservation;
