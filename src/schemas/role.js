import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    id: String,
    name: String
});

const Role = mongoose.model('reports', roleSchema);

export default Role;
