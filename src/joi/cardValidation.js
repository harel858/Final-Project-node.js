import joi from "joi";

const joiValidation = joi.object({
  businessName: joi.string().required().max(20),
  description: joi.string().required().max(200),
  address: joi.string().required(),
  phone: joi.string().required().max(14).min(7),
  image: joi.string().required(),
});

function cardValidation(userDetails) {
  return joiValidation.validate(userDetails);
}

export default cardValidation;
