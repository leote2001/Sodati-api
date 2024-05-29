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
exports.sodaRouter = void 0;
const express_1 = __importDefault(require("express"));
const logger_1 = require("../utils/logger");
const SodatiController_1 = require("../controllers/SodatiController");
exports.sodaRouter = express_1.default.Router();
exports.sodaRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const SC = new SodatiController_1.SodatiController();
        const sodaAlbums = yield SC.getAlbums("soda_albums");
        res.status(200).json(sodaAlbums);
    }
    catch (err) {
        (0, logger_1.LogError)(err.message);
        res.status(500).json({ "Error": err.message });
    }
}));
exports.sodaRouter.get("/:id/album", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const SC = new SodatiController_1.SodatiController();
        const sodaAlbum = yield SC.getAlbumById("soda_albums", id);
        res.status(200).json(sodaAlbum);
    }
    catch (err) {
        (0, logger_1.LogError)(err.message);
        res.status(500).json({ "Error": err.message });
    }
}));
exports.sodaRouter.get("/:id/tracks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const SC = new SodatiController_1.SodatiController();
        const sodaAlbumTracks = yield SC.getTracklist("soda_albums", id);
        res.status(200).json(sodaAlbumTracks);
    }
    catch (err) {
        (0, logger_1.LogError)(err.message);
        res.status(500).json({ "Error": err.message });
    }
}));
//# sourceMappingURL=sodaRouter.js.map