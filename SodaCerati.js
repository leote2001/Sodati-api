const axios = require("axios");
const conDb = require("./db");

class SodaCerati {
    getAlbums(table) {
        return new Promise(async (resolve, reject) => {
            let con;
            try {
                con = await conDb();
                const sql = `select id, title, link, cover_medium, release_date, type from ${table}`;
                con.query(sql, (err, result) => {
                    if (err) {
                        reject(new Error("Error al obtener albums"));
                        return;
                    }
                    resolve(result);
                });
            } catch (err) {
                reject(err);
            } finally {
                con.end();
                console.log("Cerrada");
            }
        });
    }
    getAlbumById(id, table) {
        return new Promise(async (resolve, reject) => {
            let con;
            try {
                con = await conDb();
                const sql = `select id, title, link, cover_medium, release_date, type from ${table} where id = ?`;
                con.query(sql, [id], (err, result) => {
                    if (err) {
                        reject(new Error("Error al obtener el album"));
                    } else if (!result.length) {
                        resolve({ message: "No encontrado" });
                    } else {
                        resolve(result);
                    }
                });
            } catch (err) {
                reject(err);
            } finally {
                con.end();
                console.log("Cerrada");
            }
        });
    }
    getAlbumTracklist(id, table) {
        return new Promise(async (resolve, reject) => {
            let con;
            const getUrl = (con, id, table) => {
                return new Promise((resolve, reject) => {
                    const sql = `select tracklist from ${table} where id = ?`;
                    con.query(sql, [id], (err, result) => {
                        if (err) {
                            reject(new Error("Error al obtener array con url de tracklist"));
                        } else if (!result.length) {
                            reject(new Error("Error al obtener datos de la base de datos"));
                        } else {
                            resolve(result);
                        }
                    });
                });
            }
            const getTracklist = async (urlArray) => {
                const url = urlArray[0].tracklist;
                try {
                    const response = await axios.get(url);
                    const responseData = response.data.data;
                    return responseData;
                } catch (err) {
                    return {message: "Error al obtener tracklist"};
                }
            }
            try {
                con = await conDb();
                const urlArray = await getUrl(con, id, table);
                const tracklist = getTracklist(urlArray);
                resolve(tracklist);
            } catch (err) {
                reject(err);
            } finally {
                con.end();
            }
        });
    }
}
module.exports = SodaCerati;