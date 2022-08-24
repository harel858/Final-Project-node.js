import runServer from "./express/expressServer.js";
import connectToDB from "./mongoose/connectToDB";

runServer();
connectToDB();
