import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
const model = 'user';
autoIncrement.initialize(mongoose.connection);

const userSchema = new mongoose.Schema({
  name: String,
  firstName: String,
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

userSchema.plugin(autoIncrement.plugin, {
  model,
  field: 'id',
  startAt: 1,
  incrementBy: 1,
});

userSchema.statics.findOneByUsername = function(login) {
  return this.findOne({ login });
};

const User = mongoose.model(model, userSchema);

export default User;
