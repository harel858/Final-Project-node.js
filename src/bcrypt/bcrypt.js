import bcrypt from "bcrypt";

async function hashedPassword(password) {
  try {
    return await bcrypt.hash(password, 10);
  } catch {
    null;
  }
}
export default hashedPassword;
