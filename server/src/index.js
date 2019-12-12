const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const getTasks = require("./getTasks/getTasks.js");
const createTask = require("./createTask/createTask.js");
const deleteTask = require("./deleteTask/deleteTask");

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
      res.status(400).send(err);
    });
});

app.post("/tasks", (req, res) => {
  const title = req.body.title;
  const completed = Boolean(req.body.completed);

  if (title.length > 0 && completed) {
    return createTask(title, completed).then(data => {
      res.status(200).json(data);
    });
  } else {
    res.status(400).json("error in inserting task");
  }
});

app.delete("/tasks/:taskId", (req, res) => {
  const taskId = Number(req.params.taskId);
  console.log(taskId);
  return deleteTask(taskId).then(data => {
    res.status(200).json(data);
  });
});
