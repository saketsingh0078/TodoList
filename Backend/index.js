const express = require("express");
const app = express();
const cors = require("cors");
const { User, Todo } = require("./db");
app.use(express.json());
app.use(cors());

app.use("/user", require("./routes/user"));
app.use("/todo", require("./routes/todo"));

app.listen(3000, () => {
  console.log("Server is connected");
});
