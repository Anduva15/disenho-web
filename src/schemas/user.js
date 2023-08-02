import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  fistName: String,
  lastName: String,
  employeeId: String,
  phoneNumber1: String,
  phoneNumber2: String,
  login: String,
  password: String,
  isSystemAdmin: Boolean,
  isSecurityAdmin: Boolean,
  isRestaurantAdmin: Boolean,
  isAccountsAdmin: Boolean,
});

const User = mongoose.model('user', userSchema);

export default User;
