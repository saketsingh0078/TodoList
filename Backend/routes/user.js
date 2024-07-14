const { User } = require("../db");

app.get("/user/", async (req, res) => {
  const user = await User.find();
  res.json({ data: user });
});

app.post("/user/signup", async (req, res) => {
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
