import { Request, Response } from "express";
import { sodaRouter } from "./src/routes/sodaRouter";
import {ceratiRouter} from "./src/routes/ceratiRouter";
import {app} from "./src/server";
import { creaTablasEInsertaAlbums } from "./src/utils/creaTablasEInsertaAlbums";
import { LogInfo } from "./src/utils/logger";
import {pool} from "./src/db";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3002;

creaTablasEInsertaAlbums();

app.use("/soda", sodaRouter);
app.use("/cerati", ceratiRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Bienvenido a la api Sodati!");
    });

app.listen(port, () => {
    LogInfo(`Escuchando en el puerto ${port}`);
});
app.on("error", err => {
console.error(err);
});
process.on("SIGINT", async () => {
try {
await pool.end();
console.log("Conexión a la base de datos cerrada");
process.exit(0);
} catch (err: any) {
    console.error("Error al tratar de cerrar la conexión - "+err.message);
    process.exit(1);
}
});