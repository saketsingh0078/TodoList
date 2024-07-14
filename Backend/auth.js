import { JWT_SECRET } from "./config";
import { User } from "./db";

const jwt = require("jsonwebtoken");

export const auth = async (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    console.log("Token is invalid");
  }
  const decoded = jwt.verify(token, JWT_SECRET);
  req.user = await User.findById(decoded);
};
