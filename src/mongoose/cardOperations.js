import cardModel from "./cardModel.js";

async function addCard(cardDetails) {
  const newCard = new cardModel(cardDetails);
  await newCard.save();
  return newCard;
}

async function findCardById(id) {
  return await cardModel.find({ userId: id });
}

async function updateCard(id, filter, option) {
  try {
    return await cardModel.updateOne(
      { _id: id },
      { $set: { [filter]: option } }
    );
  } catch {
    return null;
  }
}

export { addCard, findCardById, updateCard };
