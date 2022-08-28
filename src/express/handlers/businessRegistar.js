import joiValidation from "../../joi/userValidation.js";
import operations from "../../mongoose/userOperations.js";

async function registarUser(req, res) {
  const { name, email, password } = req.body;
  const { error } = joiValidation(req.body);

  if (error) return res.status(400).json(error.details[0].message);

  const newUser = await operations.addUserToDB({
    name,
    email,
    password,
    biz: true,
  });
  if (newUser == null) {
    return res.status(500).json("something went wrong");
  }
  return res.status(201).json(name + " is added to DB");
}

export default registarUser;
