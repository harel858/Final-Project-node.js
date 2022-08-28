import joi from "joi";

const joiValidation = joi.object({
  name: joi.string().max(20).min(2).required(),
  email: joi.string().email().required(),
  password: joi.required(),
  biz: joi.boolean(),
});

function validateRegistarUser(userDetails) {
  return joiValidation.validate(userDetails);
}

export default validateRegistarUser;
