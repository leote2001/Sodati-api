const axios = require("axios");
const conDb = require("./db");

const cerati = async () => {
    try {
        const url = "https://api.deezer.com/artist/1374/albums";
        const response = await axios.get(url);
        const albumsDb = response.data.data;
        
        const insertarDatos = async (albumsDb) => {
            try {
                const con = await conDb();
                const sql = "insert into cerati_albums (id, title, link, cover_medium, tracklist, release_date, type) values(?, ?, ?, ?, ?, ?, ?)";
                const chequeaTabla = () => {
                    return new Promise((resolve, reject) => {
                        const sql = "select * from cerati_albums";
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
                            console.error(err);
                            return;
                        }
                        console.log("Datos insertados:", results);
                    });
                }));
                await con.end();
                console.log("Conexión cerrada");
            } catch (err) {
                console.error(err);
            }
        }
        insertarDatos(albumsDb);
    } catch (err) {
        console.error(err);
    }
}
module.exports = cerati;