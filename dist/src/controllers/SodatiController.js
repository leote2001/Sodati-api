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
exports.SodatiController = void 0;
const logger_1 = require("../utils/logger");
const db_1 = require("../db");
const getTracklistArray_1 = require("../utils/getTracklistArray");
class SodatiController {
    getAlbums(table) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM ??";
                const [rows] = yield db_1.pool.query(sql, [table]);
                (0, logger_1.LogSuccess)("Se muestran los albums de la tabla " + table);
                return rows;
            }
            catch (err) {
                (0, logger_1.LogError)("Error al obtener los albums");
                throw err;
            }
        });
    }
    getAlbumById(table, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM ?? WHERE id = ?";
                const [rows] = yield db_1.pool.query(sql, [table, id]);
                if (!rows.length) {
                    (0, logger_1.LogError)("Album no encontrado");
                    throw new Error("Album no encontrado");
                }
                const album = rows[0];
                (0, logger_1.LogSuccess)(`Album con el id ${id} encontrado`);
                return album;
            }
            catch (err) {
                (0, logger_1.LogError)(`Error al obtener el album con el id ${id}`);
                throw err;
            }
        });
    }
    getTracklist(table, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tracklist = yield (0, getTracklistArray_1.getTracklistArray)(table, id);
                (0, logger_1.LogSuccess)(`Tracklist del album con el id ${id}`);
                return tracklist;
            }
            catch (err) {
                (0, logger_1.LogError)("Error al obtener tracklist");
                throw err;
            }
        });
    }
}
exports.SodatiController = SodatiController;
//# sourceMappingURL=SodatiController.js.map