import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const model = 'employee';
autoIncrement.initialize(mongoose.connection);

const employeeSchema = new mongoose.Schema({
  id: String,
  idCardNumber: String,
  name: String,
  fistName: String,
  lastName: String,
  phoneNumber1: String,
  phoneNumber2: String,
  restaurantId: String,
  positionId: String,
});

employeeSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

const Employee = mongoose.model(model, employeeSchema);

export default Employee;
