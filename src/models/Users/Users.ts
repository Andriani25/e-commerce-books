import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  home?: string;
  avatar?: string;
  shoppingCart: [];
  encryptPassword(arg: string): string;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, required: true },
  home: { type: String },
  avatar: String,
  shoppingCart: {
    Array: [
      {
        totalItems: Number,
        totalValue: Number,
        bookNames: String,
      },
    ],
  },
});

userSchema.methods.encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export default model<IUser>("user", userSchema);
