import { sign } from "jsonwebtoken";
import operations from "../../mongoose/userOperations";
import { compare } from "bcrypt";

async function signinUser(req, res) {
  const { email, password } = req.headers;
  if (!email || !password)
    return res.status(400).json("email and password must be provided");

  const userExist = await operations.findUserByEmail(email);
  if (userExist == null) return res.status(500).json("user has not found");

  const hasedPassword = await compare(password, userExist.password);

  if (!hasedPassword) return res.status(400).json("forgot password?");

  const token = sign(
    { userId: userExist._id, isBiz: userExist.biz },
    "finalProject"
  );
  return res.json(token);
}

export default signinUser;
