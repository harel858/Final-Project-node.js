import { json } from "express";
import express from "express";
const app = express();
app.use(json());

import registarHandler from "./handlers/registarHandler.js";
import getAllUsersHandler from "./handlers/getHandler.js";
import hashPassword from "./middleware/hashePassword.js";
import signinUser from "./handlers/loginHandler.js";
import authatication from "./middleware/auth.js";
import getDetailsHandler from "./handlers/getUserDetails.js";
import addCard from "./handlers/addCardHandler.js";
import registarBizHandler from "./handlers/businessRegistar.js";
import getCardsHandler from "./handlers/getCardsHandler.js";
import updateCardHandler from "./handlers/updateCardHandler.js";
import deleteCardHandler from "./handlers/deleteHandler.js";

function runServer() {
  app.get("/", getAllUsersHandler);
  app.get("/getMyDetails", authatication, getDetailsHandler);
  app.post("/registar", hashPassword, registarHandler);
  app.post("/registar/business", hashPassword, registarBizHandler);
  app.post("/login", signinUser);
  app.post("/cards/create", authatication, addCard);
  app.get("/cards", authatication, getCardsHandler);
  app.put("/cards/update", authatication, updateCardHandler);
  app.delete("/cards/delete", authatication, deleteCardHandler);

  app.listen(3000, () => console.log("server is listening"));
}
export default runServer;
