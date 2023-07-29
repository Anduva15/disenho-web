import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema({
    id: String,
    name: String,
    firstName: String,
    lastName: String,
    officePhoneNumber: String,
    fax: String,
    mobileNumber: String,
    picture: String,
    address: String,
    brands: Array
});

const Provider = mongoose.model('providers', providerSchema);

export default Provider;
