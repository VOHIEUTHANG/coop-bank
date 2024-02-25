import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import Joi from 'joi';
import { getEnvPath } from '../helper/enviroment.helper';
import JoiValidation from '../helper/joi-validation';
import { NODE_ENV } from '../constant/application.constant';

dotenvConfig({ path: getEnvPath() });

export const APPLICATION_CONFIG = {
  port: parseInt(process.env.PORT),
  nodenv: process.env.NODE_ENV,
  cookie_key: process.env.COOKIE_KEY,
  jwt_secret: process.env.JWT_SECRET
};

export default registerAs('application', () => {
  const validatonSchema = Joi.object({
    port: Joi.number().required(),
    nodenv: Joi.string().valid(...Object.values(NODE_ENV)),
    cookie_key: Joi.string().required(),
    jwt_secret: Joi.string().required()
  }).unknown(true);

  return JoiValidation(validatonSchema, APPLICATION_CONFIG);
});
