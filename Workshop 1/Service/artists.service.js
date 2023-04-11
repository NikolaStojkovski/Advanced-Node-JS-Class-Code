import Artist from "../Model/artists.model.js";

export default class ArtistService {
  static async getArtistById(artistId) {
    const artist = await Artist.findById(artistId);
    return artist;
  }

  static async addArtist(artistData) {
    const artist = new Artist(artistData);
    const createdArtist = await artist.save();
    return createdArtist;
  }
}
