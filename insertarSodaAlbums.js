const axios = require("axios");
const conDb = require("./db");

const soda = async () => {
    try {
        const urlSoda = "https://api.deezer.com/artist/4345/albums";
        const responseSoda = await axios.get(urlSoda);
        const albumsDb = responseSoda.data.data;

        const insertarDatos = async (albumsDb) => {
            try {
                const con = await conDb();
                const sql = "insert into soda_albums (id, title, link, cover_medium, tracklist, release_date, type) values(?, ?, ?, ?, ?, ?, ?)";
                const chequeaTabla = () => {
                    return new Promise((resolve, reject) => {
                        const sql = "select * from soda_albums";
                        con.query(sql, (err, result) => {
                            if (err) {
                                reject(err.message);
                                return;
                            }
                            resolve(result);
                        });
                    });
                }
const datos = await chequeaTabla();
if (datos.length) {
    console.log("La tabla ya contiene los datos");
    await con.end();
    console.log("Cerrada");
    return;
}
                await Promise.all(albumsDb.map(async album => {
                    await con.query(sql, [album.id, album.title, album.link, album.cover_medium, album.tracklist, album.release_date, album.type], (err, results) => {
                        if (err) {
                            console.error(err.message);
                            return;
                        }
                        console.log("Datos insertados:", results);
                    });
                }));
                await con.end();
                console.log("Conexión cerrada");
            } catch (error) {
                console.error(error);
            }
        }
        insertarDatos(albumsDb);
    } catch (error) {
        console.error(error);
    }
}
module.exports = soda;