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
exports.creaTablasEInsertaAlbums = void 0;
const crearTabla_1 = require("./crearTabla");
const insertarAlbums_1 = require("./insertarAlbums");
const creaTablasEInsertaAlbums = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, crearTabla_1.crearTabla)("soda");
        yield (0, crearTabla_1.crearTabla)("cerati");
        yield (0, insertarAlbums_1.insertarAlbums)("soda");
        yield (0, insertarAlbums_1.insertarAlbums)("cerati");
    }
    catch (err) {
        console.error(err.message);
    }
});
exports.creaTablasEInsertaAlbums = creaTablasEInsertaAlbums;
//# sourceMappingURL=creaTablasEInsertaAlbums.js.map