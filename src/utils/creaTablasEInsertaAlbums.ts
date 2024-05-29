import { crearTabla } from "./crearTabla";
import { insertarAlbums } from "./insertarAlbums";

export const creaTablasEInsertaAlbums = async (): Promise<void> => {
    try {
        await crearTabla("soda");
        await crearTabla("cerati");
        await insertarAlbums("soda");
        await insertarAlbums("cerati");
    } catch (err: any) {
        console.error(err.message);
    }
}