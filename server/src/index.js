const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const getTasks = require("./getTasks/getTasks.js");

app.use(cors());
app.use(bodyParser.json());

const PORT = 3006;

app.listen(PORT, () => {
  console.log(`listen to port${PORT}`);
});

app.get("/tasks", (req, res) => {
  const tasks = getTasks()
    .then(data => {
      res.status(200).json(data);
      return tasks;
    })
    .catch(err => {
      res.status(400).send(error);
    });
});
