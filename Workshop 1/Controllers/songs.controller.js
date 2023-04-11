import SongsService from "../Service/songs.service.js";

export default class SongsController {
  static async getSongById(req, res) {
    try {
      const songs = await SongsService.getSongById(req.params.id);
      res.status(200).send(songs);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async addSong(req, res) {
    try {
      const songs = await SongsService.addSong(req.body);
      res.status(200).send(songs);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
