const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const getTasks = () => {
  /**
   * TODO: you could write the following code using the pool.query
   * with promises instead of callbacks. It's easier to read and to write:
   * ex: pool.query(sqlQuery).then(() => { // something }).catch(() => {//something})
   */
  const sqlQuery = "SELECT * FROM tasks";
  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, (error, result) => {
      if (error) {
        return reject(error);
      }

      resolve(result.rows);
    });
  });
};

module.exports = getTasks;
