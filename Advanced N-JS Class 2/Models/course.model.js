import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    require: true,
    minLength: 3,
  },
  numberOfClasses: {
    type: Number,
    min: 1,
    required: true,
  },
  trainer: {
    type: String,
    required: true,
  },
  assistant: {
    type: String,
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Course = model("Course", courseSchema);

export default Course;
