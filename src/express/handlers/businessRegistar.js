import joiValidation from "../../joi/userValidation";
import operations from "../../mongoose/userOperations";

async function registarUser(req, res) {
  const { error } = joiValidation(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  req.body.biz = true;
  const newUser = await operations.addUserToDB(req.body);
  if (newUser == null) {
    return res.status(500).json("something went wrong");
  }
  return res.status(201).json((await newUser) + "is added to DB");
}

export default registarUser;
