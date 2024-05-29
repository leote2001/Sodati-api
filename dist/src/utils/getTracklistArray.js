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
exports.getTracklistArray = void 0;
const db_1 = require("../db");
const axios_1 = __importDefault(require("axios"));
const getTracklistArray = (table, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sql = `SELECT tracklist from ?? WHERE id = ?`;
        const [rows] = yield db_1.pool.query(sql, [table, id]);
        const link = rows[0].tracklist;
        const response = yield axios_1.default.get(link);
        const tracklistArray = response.data.data;
        return tracklistArray;
    }
    catch (err) {
        throw err;
    }
});
exports.getTracklistArray = getTracklistArray;
//# sourceMappingURL=getTracklistArray.js.map