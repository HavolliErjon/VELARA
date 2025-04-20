const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connesso');
  } catch (err) {
    console.error('Errore connessione DB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
