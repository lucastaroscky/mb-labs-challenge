import Joi from 'joi';
import { joiPassword } from 'joi-password';
import { Roles } from '../enums/role.enum';
import joiEnumOfString from '../utils/joi-custom-types.utils';

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  role: joiEnumOfString(Roles).required(),
  password: joiPassword
    .string()
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .required()
});

export default createUserSchema;
