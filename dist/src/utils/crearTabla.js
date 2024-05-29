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
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTabla = void 0;
const db_1 = require("../db");
const logger_1 = require("./logger");
const crearTabla = (artista) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (artista == "soda") {
            const sodaTabla = "create table if not exists soda_albums (id int not null primary key, title varchar(100) not null, link varchar(100) not null, cover_medium text not null, tracklist varchar (130) not null, release_date varchar(100) not null, type varchar(100) not null)";
            yield db_1.pool.query(sodaTabla);
        }
        else {
            const ceratiTabla = "create table if not exists cerati_albums (id int not null primary key, title varchar(100) not null, link varchar(100) not null, cover_medium text not null, tracklist varchar (130) not null, release_date varchar(100) not null, type varchar(100) not null)";
            yield db_1.pool.query(ceratiTabla);
        }
        (0, logger_1.LogSuccess)("Tabla de " + artista + " creada");
    }
    catch (err) {
        (0, logger_1.LogError)("Ocurrió un error al crear la tabla de " + artista);
        throw err;
    }
});
exports.crearTabla = crearTabla;
//# sourceMappingURL=crearTabla.js.map