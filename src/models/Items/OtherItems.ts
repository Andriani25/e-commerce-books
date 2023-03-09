import { Schema, model } from "mongoose";

const itemsSchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
    },
    itemCode: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    distributor: {
      Array: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default model("items", itemsSchema);
