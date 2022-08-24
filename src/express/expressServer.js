import { json } from "express";
import express from "express";
const app = express();
app.use(json());

import registarHandler from "./handlers/registarHandler";
import getAllUsersHandler from "./handlers/getHandler";
import hashPassword from "./middleware/hashePassword";
import signinUser from "./handlers/loginHandler";
import authatication from "./middleware/auth";
import getDetailsHandler from "./handlers/getUserDetails";
import addCard from "./handlers/addCardHandler";
import registarBizHandler from "./handlers/businessRegistar.js";

function runServer() {
  app.get("/", getAllUsersHandler);
  app.get("/getMyDetails", authatication, getDetailsHandler);
  app.post("/registar", hashPassword, registarHandler);
  app.post("/registar/business", hashPassword, registarBizHandler);
  app.post("/login", signinUser);
  app.post("/createCard", authatication, addCard);

  app.listen(3000, () => console.log("server is listening"));
}
export default runServer;
