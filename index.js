const express = require("express");
const soda = require("./insertarSodaAlbums");
const cerati = require("./insertarCeratiAlbums");
const routerApi = require("./routes");
require("dotenv").config();
const app = express();
const port = process.env.port;

app.use(express.json());
cerati();
soda();

app.get("/", (req, res) => {
    res.send("Welcome!");
});

routerApi(app);

app.listen(port, () => {
    console.log("Escuchando en el puerto:", port);
});