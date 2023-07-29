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
    isSystemAdmnin: Boolean,
    isSecurityAdmnin: Boolean,
    isRestaurantAdmnin: Boolean,
    isAccountsAdmnin: Boolean,
});

const User = mongoose.model('users', userSchema);

export default User;
