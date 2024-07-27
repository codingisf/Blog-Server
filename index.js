const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

const connectDB = async () => {
  try {
    const connectionString = process.env.CONNECTION_STRING;
    await mongoose.connect(connectionString);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

connectDB();

app.use('/', userRoutes);

const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
