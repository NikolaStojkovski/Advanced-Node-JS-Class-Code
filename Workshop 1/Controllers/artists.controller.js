import ArtistService from "../Service/artists.service.js";

export default class ArtistsController {
  static async getArtistById(req, res) {
    try {
      const artists = await ArtistService.getArtistById(req.params.id);
      res.status(200).send(artists);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async addArtist(req, res) {
    try {
      const artists = await ArtistService.addArtist(req.body);
      res.status(200).send(artists);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
