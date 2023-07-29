import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    country: String,
    company: String,
    phoneNumber: String
});

const Brand = mongoose.model('brands', brandSchema);

export default Brand;
