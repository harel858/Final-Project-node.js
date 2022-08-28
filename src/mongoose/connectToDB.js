import mongoose from "mongoose";

function connectToDB() {
  mongoose
    .connect("mongodb://localhost/customersDB")
    .then((x) => console.log("connect seccessfuly"))
    .catch((x) => console.log("connection fail"));
}
export default connectToDB;
