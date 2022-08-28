import { updateCard } from "../../mongoose/cardOperations.js";

async function updateCardHandler(req, res) {
  const { biz } = req;
  const { id, filter, option } = req.query;

  if (!biz) return res.status(400).json("user is not business");

  const updatedCard = await updateCard(id, filter, option);
  console.log(updatedCard);
  if (!updatedCard) return res.status(500).json("card not found");

  return res.status(201).json(updatedCard);
}

export default updateCardHandler;
