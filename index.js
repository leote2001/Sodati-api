const express = require("express");
const routerApi = require("./routes");
const crearTablas = require("./crearTablas");
const soda = require("./insertarSodaAlbums");
const cerati = require("./insertarCeratiAlbums");
const app = express();
const port = process.env.PORT || 3000;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: err.message });
});
const tablas = async () => {
    try {
        await crearTablas();
        await soda();
        await cerati();
    } catch (err) {
        next(err);
    }
}
tablas();
routerApi(app);
app.get("/", (req, res) => {
    res.send("Welcome!");
});
app.listen(port, () => {
    console.log("Escuchando en el puerto:", port);
});
