import { findCardByUserId } from "../../mongoose/cardOperations.js";

async function getCardsHandler(req, res) {
  const { userId, biz } = req;

  if (biz == !true) return res.status(500).json("user is not business");

  try {
    const userCards = await findCardByUserId(userId);
    return res.json(userCards);
  } catch (err) {
    console.error(err);
    return res.status(500).json("something went wrong");
  }
}

export default getCardsHandler;
