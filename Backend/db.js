const mongoose = require("mongoose");
const { MONGO_DB } = require("./config");

mongoose.connect(MONGO_DB);

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
