const express = require("express");
const routerApi = require("./routes");
const crearTablas = require("./crearTablas");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: err.message });
});
const tablas = async () => {
    try {
        await crearTablas();
    } catch (err) {
        next(err);
    }
}
tablas();
routerApi();
app.listen(port, () => {
    console.log("Escuchando en el puerto:", port);
});
