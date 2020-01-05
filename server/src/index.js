const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const getTasks = require("./getTasks/getTasks.js");
const createTask = require("./createTask/createTask.js");
const deleteTask = require("./deleteTask/deleteTask.js");
const getTaskById = require("./getTaskById/getTaskById.js");
const updateTask = require("./updateTask/updateTask.js");

app.use(cors());
app.use(bodyParser.json());

const PORT = 3006;

app.listen(PORT, () => {
  console.log(`listen to port${PORT}`);
});

app.get("/", (req, res) => {
  getTasks()
    .then(data => {
      res.status(200).json(data);

      // return tasks;
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.post("/tasks", (req, res) => {
  const title = req.body.title;
  const completed = req.body.completed;

  if (title.length > 0 && title.length <= 150) {
    return createTask(title, completed).then(data => {
      res.status(200).json(data);
    });
  } else {
    res.status(400).json("error in inserting task");
  }
});

app.delete("/tasks/:taskId", (req, res) => {
  const taskId = Number(req.params.taskId);

  return deleteTask(taskId).then(data => {
    res.status(200).json(data);
  });
});

app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (isNaN(id)) {
    res.status(404).send("Id is not number");
  } else {
    return getTaskById(id).then(data => {
      res.status(200).json(data);
    });
  }
});

app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  if (isNaN(id)) {
    res.status(404).send("Id is not number or no title");
  } else {
    return updateTask(title, id).then(data => {
      res.status(200).json(data);
    });
  }
});
