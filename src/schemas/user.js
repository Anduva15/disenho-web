import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import bcrypt from 'bcrypt';
const model = 'user';
autoIncrement.initialize(mongoose.connection);

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  firstName: String,
  lastName: String,
  employeeId: String,
  phoneNumber1: String,
  phoneNumber2: String,
  login: String,
  password: String,
  salt: String,
  isSystemAdmin: Boolean,
  isSecurityAdmin: Boolean,
  isRestaurantAdmin: Boolean,
  isAccountsAdmin: Boolean,
});

userSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

userSchema.methods.setPassword = function(password) {
  this.salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(password, this.salt);
};

const User = mongoose.model(model, userSchema);

export default User;
