import { verify } from "jsonwebtoken";

async function authUser(req, res, next) {
  const { token } = req.headers;
  if (!token) return res.status(401).json("token must be provided");

  try {
    const data = verify(token, "finalProject");
    req.userId = data.userId;
    req.biz = data.isBiz;
    next();
  } catch {
    res.status(401).json("token is illigal");
  }
}

export default authUser;
