import { Schema, model } from "mongoose";

const artistSchema = new Schema({
  firstName: {
    type: String,
    require: true,
    minLength: 3,
  },
  lastName: {
    type: String,
    require: true,
    minLength: 3,
  },
});

const Artist = model("Artist", artistSchema);

export default Artist;
