import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  businessName: String,
  description: String,
  address: String,
  phone: String,
  image: String,
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
});

const cardModel = mongoose.model("card", cardSchema);

export default cardModel;
