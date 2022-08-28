import cardModel from "./cardModel.js";

async function addCard(cardDetails) {
  const newCard = new cardModel(cardDetails);
  await newCard.save();
  return newCard;
}

async function findCardByUserId(id) {
  return await cardModel.find({
    userId: id,
  });
}
async function findOneCard(id, userId) {
  try {
    return await cardModel.findOne({
      _id: id,
      userId: userId,
    });
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function findCardById(id) {
  return await cardModel.findOne({ _id: id });
}

async function deleteCard(id) {
  try {
    return await cardModel.findByIdAndDelete({ _id: id });
  } catch {
    return null;
  }
}

async function updateCard(id, filter, option) {
  try {
    return await cardModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          [filter]: option,
        },
      }
    );
  } catch {
    return null;
  }
}

export {
  addCard,
  findCardByUserId,
  findCardById,
  updateCard,
  findOneCard,
  deleteCard,
};
