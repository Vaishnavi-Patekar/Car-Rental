const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb://localhost:27017/myapp';

async function connectToMongoDB() {
    try {
        // Connect to the MongoDB server
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Export the connectToMongoDB function
module.exports = connectToMongoDB;
