const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://aditidb:<Aditi321>@aiafsd.syayilb.mongodb.net/?appName=aiafsd';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
