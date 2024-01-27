const express = require("express");
const SodaCerati = require("../SodaCerati");
const router = express.Router();

const sc = new SodaCerati();

router.get("/", async (req, res) => {
    try {
        const albums = await sc.getAlbums("soda_albums");
        res.json(albums);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.get("/:id/album", async (req, res) => {
    const {id} = req.params;
    try {
        const album = await sc.getAlbumById(id, "soda_albums"); 
        res.json(album);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.get("/:id/tracks", async (req, res) => {
    const {id} = req.params;
    try {
        const tracklist = await sc.getAlbumTracklist(id, "soda_albums");
        res.json(tracklist);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});
module.exports = router;