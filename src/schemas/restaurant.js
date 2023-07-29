import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    id: String,
    address: String,
    phoneNumber: String,
    clientsQuantity: Number
});

const Restaurant = mongoose.model('restaurants', restaurantSchema);

export default Restaurant;
