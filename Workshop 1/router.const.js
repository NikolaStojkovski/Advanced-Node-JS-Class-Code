import { Router } from "express";
import artistsRouter from "./Routes/artists.router.js";
import songsRouter from "./Routes/songs.router.js";

const router = Router();

router.use("/artists", artistsRouter);

router.use("/songs", songsRouter);

export default router;
