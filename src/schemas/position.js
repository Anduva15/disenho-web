import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'position';
autoIncrement.initialize(mongoose.connection);

const positionSchema = new mongoose.Schema({
  id: String,
  name: String,
  roleId: String,
  userId: String,
  isRestaurantInternal: Boolean,
});

positionSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Position = mongoose.model(model, positionSchema);

export default Position;
