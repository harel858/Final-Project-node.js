import operations from "../../mongoose/userOperations.js";

async function getAllUsers(req, res) {
  try {
    const users = await operations.getAllUsers();
    return res.json(users);
  } catch {
    res.status(500).json("something went wrong");
  }
}
export default getAllUsers;
