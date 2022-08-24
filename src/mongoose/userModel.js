import { Schema, model } from "mongoose";

const userSchema = Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  biz: Boolean,
});

const userModel = model("user", userSchema);

export default userModel;
