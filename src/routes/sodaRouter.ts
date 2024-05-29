import express, { Request, Response } from "express";
import { LogError } from "../utils/logger";
import { SodatiController } from "../controllers/SodatiController";

export const sodaRouter = express.Router();

sodaRouter.get("/", async (req: Request, res: Response) => {
    try {
        const SC: SodatiController = new SodatiController();
        const sodaAlbums = await SC.getAlbums("soda_albums");
        res.status(200).json(sodaAlbums);
    } catch (err: any) {
        LogError(err.message);
        res.status(500).json({ "Error": err.message });
    }
});

sodaRouter.get("/:id/album", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const SC: SodatiController = new SodatiController();
        const sodaAlbum = await SC.getAlbumById("soda_albums", id);
        res.status(200).json(sodaAlbum);
    } catch (err: any) {
        LogError(err.message);
        res.status(500).json({ "Error": err.message });
    }
});

sodaRouter.get("/:id/tracks", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const SC: SodatiController = new SodatiController();
        const sodaAlbumTracks = await SC.getTracklist("soda_albums", id);
        res.status(200).json(sodaAlbumTracks);
    } catch (err: any) {
        LogError(err.message);
        res.status(500).json({ "Error": err.message });
    }
});