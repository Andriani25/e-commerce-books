import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    ISBN: {
      type: String,
      required: true,
    },
    tittle: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    editorial: {
      type: String,
      required: true,
    },
    autor: String,
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("book", bookSchema);
