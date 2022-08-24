import { hash } from "bcrypt";

async function hashedPassword(password) {
  try {
    return await hash(password, 10);
  } catch {
    null;
  }
}
export default hashedPassword;
