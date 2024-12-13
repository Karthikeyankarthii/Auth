const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Middleware to check if JWT token is valid
const protect = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the JWT token
    req.userId = decoded.userId; // Attach the user ID from token to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = { protect };
