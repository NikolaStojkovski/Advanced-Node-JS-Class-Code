import { Schema, model } from "mongoose";

const songSchema = new Schema({
  title: {
    type: String,
    require: true,
    minLength: 3,
  },
  genre: {
    type: String,
    require: true,
    minLength: 3,
  },
});

const Song = model("Song", songSchema);

export default Song;
