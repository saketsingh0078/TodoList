const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Yuko%4012345@cluster0.f31vu5f.mongodb.net/User"
);

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
