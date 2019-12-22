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

app.get("/tasks", (req, res) => {
  /**
   * TODO: you don't need to have a tasks variable here
   */
  const tasks = getTasks()
    .then(data => {
      console.log("this is data", data);
      res.status(200).json(data);

      /**
       * TODO: you don't need to return anything here, what is returned
       * is from the res.json().
       */
      return tasks;
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.post("/tasks", (req, res) => {
  const title = req.body.title;
  const completed = req.body.completed;

  /**
   * TODO: in your table, the max length for the title is 30 characters,
   * you need to validate that the title doesn;'t exceed 30 characters
   * and return an error if it does.
   * + validation for completed? only valid if it's a boolean
   */
  if (title.length > 0) {
    return createTask(title, completed).then(data => {
      res.status(200).json(data);
    });
  } else {
    res.status(400).json("error in inserting task");
  }
});

app.delete("/tasks/:taskId", (req, res) => {
  /**
   * TODO: what if taskId is not a number?
   * need some validation here
   */
  const taskId = Number(req.params.taskId);

  return deleteTask(taskId).then(data => {
    res.status(200).json(data);
  });
});

app.get("/tasks/:id", (req, res) => {
  /**
   * TODO: what if id is not a number?
   * need validation
   */
  const id = Number(req.params.id);
  return getTaskById(id).then(data => {
    res.status(200).json(data);
  });
});

app.put("/tasks/:id", (req, res) => {
  /**
   * TODO: what if id is not a number?
   * need validation
   * + need validation for title
   */
  const id = Number(req.params.id);
  const title = req.body.title;
  return updateTask(title, id).then(data => {
    res.status(200).json(data);
  });
});
