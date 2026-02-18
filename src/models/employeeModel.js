const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, unique: true, default: function() { return `EMP${Date.now().toString(36)}${Math.floor(Math.random()*1000)}` } },
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phoneNumber: { type: String, required: true, trim: true },
  department: { type: String, required: true, enum: ['HR','IT','Finance','Marketing','Sales','Operations','Other'] },
  designation: { type: String, required: true, trim: true },
  salary: { type: Number, required: true, min: [0, 'Salary must be positive'] },
  dateOfJoining: { type: Date, required: true },
  employmentType: { type: String, required: true, enum: ['Full-time','Part-time','Contract'] },
  status: { type: String, enum: ['Active','Inactive'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
