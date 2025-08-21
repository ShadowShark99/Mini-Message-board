require('dotenv').config();

const { Pool } = require("pg");

module.exports = new Pool({
  // host: process.env.DB_HOST,
  // user: "neondb_owner",
  // password: process.env.DB_PASSWORD,
  // database: process.env.INSTANCE,
  connectionString: process.env.DB_URL,
});