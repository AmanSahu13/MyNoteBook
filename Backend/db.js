const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/";

// Function to connect to MongoDB
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectToMongo;
