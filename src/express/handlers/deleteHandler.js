import { deleteCard, findOneCard } from "../../mongoose/cardOperations.js";

async function deleteCardHandler(req, res) {
  const { biz, userId } = req;
  const { id } = req.query;

  if (!biz) return res.status(400).json("user is not business");

  const card = await findOneCard(id, userId);
  if (!card) return res.status(500).json("card not found");

  const deleteSuccess = await deleteCard(id);
  console.log(deleteSuccess);
  if (!deleteSuccess) return res.status(500).json("card not deleted");

  return res
    .status(200)
    .json(` ${card.businessName} has been deleted successfuly`);
}

export default deleteCardHandler;
