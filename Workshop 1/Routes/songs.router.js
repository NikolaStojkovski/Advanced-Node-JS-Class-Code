import { Router } from "express";
import SongController from "../Controllers/songs.controller.js";

const router = Router();

router.post("/", SongController.addSong);
router.get("/:id", SongController.getSongById);

export default router;
