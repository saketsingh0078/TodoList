const express = require("express");
const app = express();
const cors = require("cors");
const { User } = require("./db");
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const user = await User.find();
  res.json({ data: user });
});

app.post("/signup", async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  console.log(user);
  res.status(202).json({
    msg: "successffulluy  sign up",
  });
});

app.listen(3000, () => {
  console.log("Server is connected");
});
