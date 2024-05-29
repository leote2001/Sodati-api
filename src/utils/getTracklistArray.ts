import {pool} from "../db";
import axios from "axios";

export const getTracklistArray = async (table: string, id: string | number): Promise<any[]> => {
try {
const sql = `SELECT tracklist from ?? WHERE id = ?`;
const [rows]: any[] = await pool.query(sql, [table, id]);
const link = rows[0].tracklist; 
const response = await axios.get(link);
const tracklistArray: any[] = response.data.data;
return tracklistArray;
} catch(err: any) {
    throw err;
}
} 