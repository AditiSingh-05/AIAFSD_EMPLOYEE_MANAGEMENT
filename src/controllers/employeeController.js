const Employee = require('../models/employeeModel');

exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    next(err);
  }
};

exports.getEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(emp);
  } catch (err) {
    next(err);
  }
};

exports.createEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.create(req.body);
    res.status(201).json(emp);
  } catch (err) {
    if (err.name === 'ValidationError') return res.status(400).json({ message: err.message });
    if (err.code === 11000) return res.status(400).json({ message: 'Duplicate field value entered' });
    next(err);
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(emp);
  } catch (err) {
    if (err.name === 'ValidationError') return res.status(400).json({ message: err.message });
    next(err);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.findByIdAndDelete(req.params.id);
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json({ message: 'Employee deleted' });
  } catch (err) {
    next(err);
  }
};

exports.searchEmployees = async (req, res, next) => {
  try {
    const { name, department } = req.query;
    const filters = {};
    if (name) filters.fullName = { $regex: name, $options: 'i' };
    if (department) filters.department = department;
    const results = await Employee.find(filters);
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};
