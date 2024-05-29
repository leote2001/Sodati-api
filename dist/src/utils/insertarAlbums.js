"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertarAlbums = void 0;
const logger_1 = require("./logger");
const axios_1 = __importDefault(require("axios"));
const db_1 = require("../db");
const insertarAlbums = (artista) => __awaiter(void 0, void 0, void 0, function* () {
    let artistaAlbums;
    let tabla;
    try {
        if (artista == "soda") {
            tabla = "soda_albums";
            const urlSoda = "https://api.deezer.com/artist/4345/albums";
            const response = yield axios_1.default.get(urlSoda);
            artistaAlbums = response.data.data;
        }
        else {
            tabla = "cerati_albums";
            const urlCerati = "https://api.deezer.com/artist/1374/albums";
            const response = yield axios_1.default.get(urlCerati);
            artistaAlbums = response.data.data;
        }
        for (const album of artistaAlbums) {
            const sql = `INSERT IGNORE INTO ${tabla} (id, title, link, cover_medium, tracklist, release_date, type) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            const values = [album.id, album.title, album.link, album.cover_medium, album.tracklist, album.release_date, album.type];
            yield db_1.pool.query(sql, values);
        }
        (0, logger_1.LogSuccess)("Albums de " + artista + " insertados");
    }
    catch (err) {
        (0, logger_1.LogError)("Ocurrió algún error al insertar los albums de " + artista);
        throw err;
    }
});
exports.insertarAlbums = insertarAlbums;
//# sourceMappingURL=insertarAlbums.js.map