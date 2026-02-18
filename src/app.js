const express = require('express');
const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employeeRoutes');
const errorHandler = require('./middleware/errorMiddleware');

connectDB();

const app = express();
app.use(express.json());

app.use('/employees', employeeRoutes);

app.use(errorHandler);

module.exports = app;
