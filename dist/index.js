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
const sodaRouter_1 = require("./src/routes/sodaRouter");
const ceratiRouter_1 = require("./src/routes/ceratiRouter");
const server_1 = require("./src/server");
const creaTablasEInsertaAlbums_1 = require("./src/utils/creaTablasEInsertaAlbums");
const logger_1 = require("./src/utils/logger");
const db_1 = require("./src/db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 3002;
(0, creaTablasEInsertaAlbums_1.creaTablasEInsertaAlbums)();
server_1.app.use("/soda", sodaRouter_1.sodaRouter);
server_1.app.use("/cerati", ceratiRouter_1.ceratiRouter);
server_1.app.get("/", (req, res) => {
    res.send("Bienvenido a la api Sodati!");
});
server_1.app.listen(port, () => {
    (0, logger_1.LogInfo)(`Escuchando en el puerto ${port}`);
});
server_1.app.on("error", err => {
    console.error(err);
});
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.pool.end();
        console.log("Conexión a la base de datos cerrada");
        process.exit(0);
    }
    catch (err) {
        console.error("Error al tratar de cerrar la conexión - " + err.message);
        process.exit(1);
    }
}));
//# sourceMappingURL=index.js.map