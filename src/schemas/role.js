import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'role';
autoIncrement.initialize(mongoose.connection);

const roleSchema = new mongoose.Schema({
  id: String,
  name: String,
});

roleSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Role = mongoose.model(model, roleSchema);

export default Role;
