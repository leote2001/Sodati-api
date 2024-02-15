const express = require("express");
const conDb = require("./db");
const soda = require("./insertarSodaAlbums");
const cerati = require("./insertarCeratiAlbums");
const routerApi = require("./routes");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//cerati();
//soda();

app.get("/", async (req, res) => {
    try {
        const con = await conDb();
        const sql = "create table if not exists soda_albums (id int not null primary key, title varchar(100) not null, link varchar(100) not null, cover_medium text not null, tracklist varchar(100) not null, release_date varchar(100) not null, type varchar(100) not null)";
        con.query(sql, (err, result) => {
            if (err) {
                console.error(err.message);
                res.status(500).json({message: "Error al crear la tabla"});
                return;
            }
            res.send("Tabla creada!");
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Error de conexión a la base de datos" });
    }
});

//routerApi(app);

app.listen(port, () => {
    console.log("Escuchando en el puerto:", port);
});