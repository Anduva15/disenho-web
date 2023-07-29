import mongoose from 'mongoose';

const positionSchema = new mongoose.Schema({
    id: String,
    name: String,
    roleId: String,
    userId: String,
    isRestaurantInternal: Boolean
});

const Position = mongoose.model('positions', positionSchema);

export default Position;
