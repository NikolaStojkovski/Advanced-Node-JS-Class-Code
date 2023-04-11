import { Router } from "express";
import ArtistsController from "../Controllers/artists.controller.js";

const router = Router();

router.post("/", ArtistsController.addArtist);
router.get("/:id", ArtistsController.getArtistById);

export default router;
