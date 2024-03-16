/*const axios = require("axios");
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
module.exports = SodaCerati;*/
// PostgreSQL
require("dotenv").config();
const axios = require("axios");
const { Pool } = require("pg");

class SodaCerati {
    constructor() {
this.pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 5432, // Default PostgreSQL port is 5432
});
        }

    async getAlbums(table) {
        const sql = `SELECT id, title, link, cover_medium, release_date, type FROM ${table}`;
        try {
            const client = await this.pool.connect();
            const result = await client.query(sql);
            client.release();
            return result.rows;
        } catch (err) {
            throw new Error("Error fetching albums");
        }
    }

    async getAlbumById(id, table) {
        const sql = `SELECT id, title, link, cover_medium, release_date, type FROM ${table} WHERE id = $1`;
        try {
            const client = await this.pool.connect();
            const result = await client.query(sql, [id]);
            client.release();
            if (result.rows.length === 0) {
                throw new Error("Album not found");
            }
            return result.rows;
        } catch (err) {
            throw err;
        }
    }

    async getAlbumTracklist(id, table) {
        const sql = `SELECT tracklist FROM ${table} WHERE id = $1`;
        try {
            const client = await this.pool.connect();
            const result = await client.query(sql, [id]);
            client.release();
            if (result.rows.length === 0) {
                throw new Error("Album not found");
            }
            const tracklistUrl = result.rows[0].tracklist;
            const response = await axios.get(tracklistUrl);
            return response.data.data;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = SodaCerati;
