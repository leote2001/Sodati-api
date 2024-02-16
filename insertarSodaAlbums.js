const axios = require("axios");
const pool = require("./db");

const soda = async () => {
    try {
        const urlSoda = "https://api.deezer.com/artist/4345/albums";
        const responseSoda = await axios.get(urlSoda);
        const albumsDb = responseSoda.data.data;
        const insertarDatos = async (albumsDb) => {
            const con = await pool.getConnection();
            const sql = "insert ignore into soda_albums (id, title, link, cover_medium, tracklist, release_date, type) values(?, ?, ?, ?, ?, ?, ?)";
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
module.exports = soda;