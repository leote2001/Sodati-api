const mysql = require("mysql");
require("dotenv").config();
const config = {
    host: process.env.db_host, 
    user: process.env.db_user, 
    password: process.env.db_password, 
    database: process.env.db_database, 
    port: process.env.db_port || ""
}
const conDb = () => {
    const con = mysql.createConnection(config);
    return new Promise((resolve, reject) => {
        con.connect(err => {
            if (err) {
                reject(new Error("No se pudo realizar la conexión a la base de datos"));
            } else {
            resolve(con);
            console.log("Conectado");
            }
        });
    });
} 
module.exports = conDb;