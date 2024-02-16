const pool = require("./db");

const crearTablas = async () => {
    const sodaTabla = "create table if not exists soda_albums (id int not null primary key, title varchar(100) not null, link varchar(100) not null, cover_medium text not null, tracklist varchar(100) not null, release_date varchar(100) not null, type varchar(100) not null)";
    const ceratiTabla = "create table if not exists cerati_albums (id int not null primary key, title varchar(100) not null, link varchar(100) not null, cover_medium text not null, tracklist varchar(100) not null, release_date varchar(100) not null, type varchar(100) not null)";
    try {
    await pool.query(sodaTabla);
    await pool.query(ceratiTabla);
    } catch(err) {
        throw new Error("No se pudieron crear las tablas");
    }
}
module.exports = crearTablas;