const pool = require("./db");
const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", async (req, res) => {
    const sql = "create table soda_albums (id int not null primary key, title varchar(100) not null, link varchar(100) not null, cover_medium text not null, tracklist varchar(100) not null, release_date varchar(100) not null, type varchar(100) not null)";
    try {
await pool.query(sql);
res.json({message: "Éxito al crear"});
    } catch(err) {
        res.status(500).json({message: "Error al conectarse"});
    }
});

app.listen(port, () => {
    console.log("Escuchando en el puerto:", port);
});
