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
    price: Number,

    editorial: {
      type: String,
      required: true,
    },
    autor: String,
    stock: Number,
    distributor: String,
  },
  {
    timestamps: true,
  }
);

export default model("book", bookSchema);
