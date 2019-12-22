const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const createTask = (title, completed) => {
  /**
   * TODO: all below can be rewritten using pool.query with promises 
   * not with callback.
   */
  const sqlQuery =
    "INSERT INTO tasks (title,completed) VALUES($1,$2) RETURNING *";
  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, [title, completed], (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result.rows);
    });
  });
};

module.exports = createTask;
