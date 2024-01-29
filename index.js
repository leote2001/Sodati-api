const express = require("express");
const conDb = require("./db");
const soda = require("./insertarSodaAlbums");
const cerati = require("./insertarCeratiAlbums");
const routerApi = require("./routes");
require("dotenv").config();
const app = express();
const port = process.env.port;

app.use(express.json());
//cerati();
//soda();

routerApi(app);
app.get("/", async (req, res) => {
    const sql = "insert into soda_albums (id, title, link, cover_medium, tracklist, release_date, type) values(0, 'ddd', 'ddda', 'aaaaaaa', 'ase', 'asdfdf', 'asdf')";

    const inserta = (sql, con) => {
        return new Promise((resolve, reject) => {
            con.query(sql, (err, result) => {
                if (err) {
                    console.log(err.message)
                    reject(err.message)
                    return;
                }
                resolve(result);
            })
        })
    }
    try {
        const con = await conDb();
        const data = await inserta(sql, con);
        res.json(data);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
    //res.send("Welcome!");
});

app.listen(port, () => {
    console.log("Escuchando en el puerto:", port);
});