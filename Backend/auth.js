const { JWT_SECRET } = require("./config");
const { User } = require("./db");

const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    console.log("Token is invalid");
  }
  const decoded = jwt.verify(token, JWT_SECRET);
  req.user = await User.findById(decoded.id);
};

module.exports = { auth };
