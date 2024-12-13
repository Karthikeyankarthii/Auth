const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(bodyParser.json()); // Parse incoming request bodies

// Use auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
