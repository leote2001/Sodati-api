import { LogSuccess, LogError } from "./logger";
import axios from "axios";
import { pool } from "../db";

export const insertarAlbums = async (artista: string): Promise<void> => {
    let artistaAlbums: any[];
    let tabla: string;
    try {
        if (artista == "soda") {
            tabla = "soda_albums";
            const urlSoda = "https://api.deezer.com/artist/4345/albums";
            const response = await axios.get(urlSoda);
            artistaAlbums = response.data.data;
        } else {
            tabla = "cerati_albums";
            const urlCerati = "https://api.deezer.com/artist/1374/albums";
            const response = await axios.get(urlCerati);
            artistaAlbums = response.data.data;
        }
        for (const album of artistaAlbums) {
            const sql = `INSERT IGNORE INTO ${tabla} (id, title, link, cover_medium, tracklist, release_date, type) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            const values = [album.id, album.title, album.link, album.cover_medium, album.tracklist, album.release_date, album.type];
            await pool.query(sql, values);
        }
        LogSuccess("Albums de " + artista + " insertados");
    } catch (err: any) {
        LogError("Ocurrió algún error al insertar los albums de " + artista);
        throw err;
    }        
}