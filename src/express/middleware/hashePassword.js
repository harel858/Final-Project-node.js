import hashedPassword from "../../bcrypt/bcrypt.js";

async function middlewareHash(req, res, next) {
  const password = await hashedPassword(req.body.password);
  if (password == null) return res.status(500).json("hash password goes wrong");
  req.body.password = password;
  next();
}

export default middlewareHash;
