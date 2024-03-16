/*const mysql = require("mysql2/promise");
require("dotenv").config();
const pool = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE, 
    port: process.env.DB_PORT || 3306
});
module.exports  = pool;*/
// PostgreSQL
const { Pool } = require('pg');
require('dotenv').config();

// Create a new PostgreSQL pool
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 5432, // Default PostgreSQL port is 5432
});

module.exports = pool;
