import { Schema, model } from "mongoose";

const cardSchema = Schema({
  businessName: String,
  description: String,
  address: String,
  phone: String,
  image: String,
  userId: String,
});

const cardModel = model("card", cardSchema);

export default cardModel;
