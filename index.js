const mysql = require('mysql2/promise');
const express = require("express");
const conDb = require("./db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        });

        const sql = `
            CREATE TABLE IF NOT EXISTS soda_albums (
                id INT NOT NULL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
                link VARCHAR(100) NOT NULL,
                cover_medium TEXT NOT NULL,
                tracklist VARCHAR(100) NOT NULL,
                release_date VARCHAR(100) NOT NULL,
                type VARCHAR(100) NOT NULL
            )
        `;
        
        await connection.query(sql);
        console.log("Tabla 'soda_albums' creada correctamente");
        res.send("Tabla creada!");
    } catch (err) {
        console.error("Error al crear la tabla 'soda_albums':", err);
        res.status(500).json({ message: "Error de conexión a la base de datos" });
    }
});

app.listen(port, () => {
    console.log("Escuchando en el puerto:", port);
});
