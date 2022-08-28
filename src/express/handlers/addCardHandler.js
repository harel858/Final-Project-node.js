import cardValidation from "../../joi/cardValidation.js";
import { addCard } from "../../mongoose/cardOperations.js";

async function addCardHandler(req, res) {
  try {
    const { businessName, description, address, phone, image } = req.body;
    const { userId } = req;

    if (!req.biz) return res.status(400).json("user is not business");

    const { error } = cardValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const newCard = await addCard({
      businessName,
      description,
      address,
      phone,
      image,
      userId,
    });

    return res.status(201).json(newCard);
  } catch (err) {
    console.error(err);
    return res.status(500).json("somthing went wrong");
  }
}

export default addCardHandler;
