const mysql = require("mysql2/promise");
require("dotenv").config();
const config = {
    host: process.env.db_host, 
    user: process.env.db_user, 
    password: process.env.db_password, 
    database: process.env.db_database, 
    port: process.env.db_port || "3306"
}
const conDb = async () => {
    const con = await mysql.createConnection(config);
    return con;
}
module.exports = conDb;