import {
  updateCard,
  findCardById,
  findOneCard,
} from "../../mongoose/cardOperations.js";

async function updateCardHandler(req, res) {
  const { biz, userId } = req;
  const { id, filter, option } = req.query;

  if (!biz) return res.status(400).json("user is not business");

  let card = await findOneCard(id, userId);
  if (!card) return res.status(500).json("card has not found");

  const updateSuccess = await updateCard(id, filter, option);
  console.log(updateSuccess);
  if (updateSuccess.acknowledged == false)
    return res.status(500).json("one or more details are not legal");

  card = await findOneCard(id, userId);

  return res.status(201).json(card);
}

export default updateCardHandler;
