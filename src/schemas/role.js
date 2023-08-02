import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const Role = mongoose.model('role', roleSchema);

export default Role;
