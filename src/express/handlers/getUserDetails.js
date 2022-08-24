import operations from "../../mongoose/userOperations";

async function getUserDetails(req, res) {
  try {
    const user = await operations.findUserById(req.userId);
    return res.json(user);
  } catch {
    res.status(500).json("user is not found");
  }
}
export default getUserDetails;
