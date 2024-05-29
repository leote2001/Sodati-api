import { LogSuccess, LogError } from "../utils/logger";
import { pool } from "../db";
import { getTracklistArray } from "../utils/getTracklistArray";
import { ISodatiController } from "./interfaces";

export class SodatiController implements ISodatiController {
    async getAlbums(table: string): Promise<any[]> {
        try {
            const sql = "SELECT * FROM ??";
            const [rows]: any[] = await pool.query(sql, [table]);
            LogSuccess("Se muestran los albums de la tabla " + table);
            return rows;
        } catch (err: any) {
            LogError("Error al obtener los albums");
            throw err;
        }     
    }
    async getAlbumById(table: string, id: string | number): Promise<any> {
        try {
            const sql = "SELECT * FROM ?? WHERE id = ?";
            const [rows]: any[] = await pool.query(sql, [table, id]);
            if (!rows.length) {
                LogError("Album no encontrado");
                throw new Error("Album no encontrado");
            }
            const album: any = rows[0];
            LogSuccess(`Album con el id ${id} encontrado`);
            return album;
        } catch (err: any) {
            LogError(`Error al obtener el album con el id ${id}`);
            throw err;
        }     
    }
    async getTracklist(table: string, id: string | number): Promise<any[]> {
        try {
            const tracklist: any[] = await getTracklistArray(table, id);
            LogSuccess(`Tracklist del album con el id ${id}`);
            return tracklist;
        } catch (err: any) {
            LogError("Error al obtener tracklist");
            throw err;
        } 
    }
}