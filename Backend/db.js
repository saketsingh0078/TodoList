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

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  User,
  Todo,
};
