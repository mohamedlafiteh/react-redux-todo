const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const getTasks = () => {
  const sqlQuery = "SELECT * FROM tasks";
  return pool.query(sqlQuery).then(result => result.rows);
};

module.exports = getTasks;
