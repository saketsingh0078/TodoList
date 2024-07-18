const express = require("express");
const app = express();
const cors = require("cors");
const { User, Todo } = require("./db");
app.use(express.json());
app.use(cors());
const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");
const { auth } = require("./auth");

app.get("/", auth, async (req, res) => {
  const user = await User.find();
  res.json({ data: user });
});

app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  const existingUser = await User.findOne({ email: email });
  return res.json({
    msg: existingUser,
  });

  if (existingUser) {
    return res.status(401).json({
      msg: "user already existed",
    });
  }

  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    JWT_SECRET
  );

  res.status(202).json({
    msg: "successffulluy  sign up",
    token: token,
  });
});

app.post("/sign", async (req, res) => {
  const { email, body } = req.body;
  const user = await User.findOne({
    email,
    password,
  });

  if (user) {
    res.status(401).json({
      msg: " Invalid user details",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    msg: "user Successfully Sign in ",
    token: token,
  });
});

// todo route

app.post("/todo", auth, async (req, res) => {
  const todo = await Todo.create({
    title: req.body.title,
    description: req.body.description,
    userId: req.user,
  });

  console.log(todo);
  res.status(200).json({
    msg: "Todo Successfully created",
  });
});

app.listen(3000, () => {
  console.log("Server is connected");
});
