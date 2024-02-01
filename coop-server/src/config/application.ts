import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import Joi from 'joi';
import { NodeEnv } from '../constant';
import { getEnvPath } from '../helper/enviroment.helper';
import JoiValidation from '../helper/joi-validation';

dotenvConfig({ path: getEnvPath() });

export const ApplicationConfig = {
  port: parseInt(process.env.PORT),
  nodenv: process.env.NODE_ENV,
  cookie_key: process.env.COOKIE_KEY
};

export default registerAs('application', () => {
  const validatonSchema = Joi.object({
    port: Joi.number().required(),
    nodenv: Joi.string()
      .valid(...Object.values(NodeEnv))
      .valid(),
    cookie_key: Joi.string().required()
  }).unknown(true);

  return JoiValidation(validatonSchema, ApplicationConfig);
});
