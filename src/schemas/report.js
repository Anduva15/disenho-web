import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    id: String,
    description: String,
    registrationDate: Date,
    userId: String,
});

const Report = mongoose.model('reports', reportSchema);

export default Report;
