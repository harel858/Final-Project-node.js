import userModel from "./userModel.js";

async function addUserToDB(userDetails) {
  try {
    return await new userModel(userDetails).save();
  } catch {
    return null;
  }
}

async function getAllUsers() {
  try {
    return await userModel.find();
  } catch {
    return null;
  }
}

async function findUserByEmail(email) {
  try {
    return await userModel.findOne({ email: email });
  } catch {
    return null;
  }
}

async function findUserById(id) {
  try {
    return await userModel.findOne({ _id: id });
  } catch {
    return null;
  }
}
export default { addUserToDB, getAllUsers, findUserByEmail, findUserById };
