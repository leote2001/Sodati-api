/*const axios = require("axios");
const pool = require("./db");

const cerati = async () => {
    try {
        const urlCerati = "https://api.deezer.com/artist/1374/albums";
        const responseCerati = await axios.get(urlCerati);
        const albumsDb = responseCerati.data.data;
        const insertarDatos = async (albumsDb) => {
            const con = await pool.getConnection();
            const sql = "insert ignore into cerati_albums(id, title, link, cover_medium, tracklist, release_date, type) values(?, ?, ?, ?, ?, ?, ?)";
            try {
                albumsDb.forEach(async (album) => {
                    const result = await con.query(sql, [album.id, album.title, album.link, album.cover_medium, album.tracklist, album.release_date, album.type]);
                });
            } catch (err) {
                throw new Error("Error al insertar datos");
            }
        }
        await insertarDatos(albumsDb);
    } catch (error) {
        console.error(error.message);
    }
}
module.exports = cerati;*/
// PostgreSQL
const axios = require("axios");
const pool = require("./db");

const cerati = async () => {
    try {
        const urlCerati = "https://api.deezer.com/artist/1374/albums";
        const responseCerati = await axios.get(urlCerati);
        const albumsDb = responseCerati.data.data;
        const insertarDatos = async (albumsDb) => {
            const client = await pool.connect();
            const sql = "INSERT INTO cerati_albums(id, title, link, cover_medium, tracklist, release_date, type) VALUES($1, $2, $3, $4, $5, $6, $7) ON CONFLICT DO NOTHING";
            try {
                for (const album of albumsDb) {
                    await client.query(sql, [album.id, album.title, album.link, album.cover_medium, album.tracklist, album.release_date, album.type]);
                }
            } finally {
                client.release();
            }
        };
        await insertarDatos(albumsDb);
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = cerati;
