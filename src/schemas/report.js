import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'report';
autoIncrement.initialize(mongoose.connection);

const reportSchema = new mongoose.Schema({
  id: String,
  description: String,
  registrationDate: Date,
  userId: String,
});

reportSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Report = mongoose.model(model, reportSchema);

export default Report;
