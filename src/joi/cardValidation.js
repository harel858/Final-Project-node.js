import { object, string } from "joi";

const joiValidation = object({
  businessName: string().required().max(20),
  description: string().required().max(200),
  address: string().required(),
  phone: string().required().max(14).min(7),
  image: string().required(),
});

function cardValidation(userDetails) {
  return joiValidation.validate(userDetails);
}

export default cardValidation;
