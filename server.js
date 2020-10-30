var express = require("express");
var app = express();

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.json("You are on the homepage");
});

app.post("/post", function (req, res) {
  const { user, password } = req.body;
  res.json(`Welcome ${user}!!`);
});

app.delete("/delete", function (req, res) {
  const { taskId } = req.body;
  res.json(`{delete: true}`);
});

app.put("/put/:id", function (req, res) {
  const { id } = req.params;
  res.json(`Task ${id} has been updated!!`);
});
