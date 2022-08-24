import { object, string, boolean } from "joi";

const joiValidation = object({
  name: string().max(9).min(2).required(),
  email: string().email().required(),
  password: string().required(),
  biz: boolean(),
});

function validateRegistarUser(userDetails) {
  return joiValidation.validate(userDetails);
}

export default validateRegistarUser;
