const express = require("express");
const conDb = require("./db");
const { insertarSodaAlbums, insertarCeratiAlbums } = require("./insertarAlbums");
const routerApi = require("./routes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Función para crear la tabla 'soda_albums' si no existe
async function crearTablaSodaAlbums() {
    try {
        const con = await conDb();
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
        await con.query(sql);
        console.log("Tabla 'soda_albums' creada correctamente");
    } catch (err) {
        console.error("Error al crear la tabla 'soda_albums':", err.message);
    }
}

// Rutas
app.get("/", async (req, res) => {
    await crearTablaSodaAlbums(); // Crear la tabla 'soda_albums' antes de procesar las solicitudes
    res.send("¡Bienvenido!");
});

// Manejo de rutas API
routerApi(app);

// Iniciar el servidor
app.listen(port, () => {
    console.log("Escuchando en el puerto:", port);
});
