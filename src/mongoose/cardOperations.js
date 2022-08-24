import cardModel from "./cardModel";

async function addCard(cardDetails) {
  try {
    const newCard = await new cardModel(cardDetails).save();
    return newCard;
  } catch {
    return null;
  }
}

export default { addCard };
