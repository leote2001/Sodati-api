const axios = require("axios");
const pool = require("./db");

class SodaCerati {
    constructor() {
        this.conexion;
        this.init();
    }
    async init() {
        try {
            this.conexion = await pool.getConnection();
        } catch (err) {
            throw new Error("Error al conectarse a la base de datos");
        }
    }
    async getAlbums(table) {
        const sql = `select id, title, link, cover_medium, release_date, type from ${table}`;
        try {
            const result = await pool.query(sql);
            return result[0];
        } catch (err) {
            throw new Error("Error al obtener los álbumes");
        } finally {
            this.conexion.release();
            console.log("Cerrada");
        }
    }
    async getAlbumById(id, table) {
        const sql = `select id, title, link, cover_medium, release_date, type from ${table} where id = ?`;
        try {
            const result = await pool.query(sql, [id, table]);
            if (!result[0].length) {
                throw new Error("No encontrado");
            }
            return result[0];
        } catch (err) {
            throw err;
        } finally {
            this.conexion.release();
            console.log("Cerrada");
        }
    }
    async getAlbumTracklist(id, table) {
        const sql = `select tracklist from ${table} where id = ?`;
        try {
            const result = await pool.query(sql, [id, table]);
            if (!result[0].length) {
                throw new Error("No encontrado");
            }
            const url = result[0] [0].tracklist;
            const response = await axios.get(url);
            const tracklist = response.data.data;
            return tracklist;
        } catch (err) {
            throw err;
        } finally {
            this.conexion.release();
        }
    }
}
module.exports = SodaCerati;