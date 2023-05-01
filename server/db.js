const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Remember toi change this password",
  host: "localhost",
  port: "5432",
  database: "perntodo",
});

module.exports = pool;
