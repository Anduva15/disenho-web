import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    id: String,
    name: String,
    date: Date,
    clientsQuantity: Number,
    restaurantId: String,
    tableId: String
});

const Reservation = mongoose.model('reservations', reservationSchema);

export default Reservation;
