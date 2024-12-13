const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Middleware to hash the password before saving the user
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Don't hash if password isn't modified
  const salt = await bcrypt.genSalt(10); // Generate a salt with 10 rounds
  this.password = await bcrypt.hash(this.password, salt); // Hash the password
  next();
});

// Method to match entered password with the hashed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // Compare password
};

module.exports = mongoose.model("User", UserSchema); // Create and export the model
