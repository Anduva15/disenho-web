import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
    id: String,
    countryName: String
});

const Country = mongoose.model('countrys', countrySchema);

export default Country;
