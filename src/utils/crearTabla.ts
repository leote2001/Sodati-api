import { pool } from "../db";
import { LogSuccess, LogError } from "./logger";

export const crearTabla = async (artista: string): Promise<void> => {
    try {
        if (artista == "soda") {
            const sodaTabla = "create table if not exists soda_albums (id int not null primary key, title varchar(100) not null, link varchar(100) not null, cover_medium text not null, tracklist varchar (130) not null, release_date varchar(100) not null, type varchar(100) not null)";
            await pool.query(sodaTabla);
        } else {
            const ceratiTabla = "create table if not exists cerati_albums (id int not null primary key, title varchar(100) not null, link varchar(100) not null, cover_medium text not null, tracklist varchar (130) not null, release_date varchar(100) not null, type varchar(100) not null)";
            await pool.query(ceratiTabla);
        }
        LogSuccess("Tabla de "+artista+" creada");
    } catch (err: any) {
        LogError("Ocurrió un error al crear la tabla de " + artista);
        throw err;
    } 
}