const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI stored in the .env file
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the app if MongoDB connection fails
  }
};

module.exports = connectDB;
