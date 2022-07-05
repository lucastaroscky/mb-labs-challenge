import DateExtension from '@joi/date';
import JoiImport from 'joi';

import { EventCategory } from '../enums/category.enum';
import joiEnumOfString from '../utils/joi-custom-types.utils';

const Joi = JoiImport.extend(DateExtension) as typeof JoiImport;

const createEventSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  place: Joi.string().required(),
  image: Joi.string().required(),
  price: Joi.number().required(),
  date: Joi.date().format('YYYY-MM-DD').utc().required(),
  category: joiEnumOfString(EventCategory).required()
});

export default createEventSchema;
