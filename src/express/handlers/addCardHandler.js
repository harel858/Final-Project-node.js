import cardValidation from "../../joi/cardValidation";
import operations from "../../mongoose/cardOperations";

async function addCardHandler(req, res) {
  if (req.biz == true) {
    const { error } = cardValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    req.body.userId = req.userId;
    const newCard = await operations.addCard(req.body);
    if (newCard == null) return res.status(500).json(newCard);
    return res.json(newCard);
  }
  return res.status(400).json("user is not business");
}

export default addCardHandler;
