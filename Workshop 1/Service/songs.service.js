import Song from "../Model/songs.model.js";

export default class SongService {
  static async getSongById(songId) {
    const song = await Song.findById(songId);
    return song;
  }

  static async addSong(songData) {
    const song = new Song(songData);
    const createdSong = await song.save();
    return createdSong;
  }
}
