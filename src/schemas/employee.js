import mongoose from 'mongoose';

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

const Employee = mongoose.model('employee', employeeSchema);

export default Employee;
