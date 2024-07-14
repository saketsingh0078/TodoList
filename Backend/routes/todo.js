const { Todo } = require("../db");

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
