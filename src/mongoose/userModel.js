import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  biz: Boolean,
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
