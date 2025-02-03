// Import mongoose module
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('<your-connection-uri>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listener for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB database');
});

// Event listener for connection error
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
