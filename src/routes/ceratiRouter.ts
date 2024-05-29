import express, { Request, Response } from "express";
import { LogError } from "../utils/logger";
import { SodatiController } from "../controllers/SodatiController";

export const ceratiRouter = express.Router();

ceratiRouter.get("/", async (req: Request, res: Response) => {
    try {
        const SC: SodatiController = new SodatiController();
        const ceratiAlbums = await SC.getAlbums("cerati_albums");
        res.status(200).json(ceratiAlbums);
    } catch (err: any) {
        LogError(err.message);
        res.status(500).json({ "Error": err.message });
    }
});

ceratiRouter.get("/:id/album", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const SC: SodatiController = new SodatiController();
        const ceratiAlbum = await SC.getAlbumById("cerati_albums", id);
        res.status(200).json(ceratiAlbum);
    } catch (err: any) {
        LogError(err.message);
        res.status(500).json({ "Error": err.message });
    }
});

ceratiRouter.get("/:id/tracks", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const SC: SodatiController = new SodatiController();
        const ceratiAlbumTracks = await SC.getTracklist("cerati_albums", id);
        res.status(200).json(ceratiAlbumTracks);
    } catch (err: any) {
        LogError(err.message);
        res.status(500).json({ "Error": err.message });
    }
});