import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { getEnvPath } from '../helper/enviroment.helper';
import Joi from 'joi';
import JoiValidation from '../helper/joi-validation';
import { APPLICATION_CONFIG } from './application';
import { NODE_ENV } from '../constant/application.constant';

dotenvConfig({ path: getEnvPath() });

export const DATABASE_CONFIG = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: [NODE_ENV.DEVELOPMENT, NODE_ENV.TEST].includes(APPLICATION_CONFIG.nodenv),
  migrationsRun: APPLICATION_CONFIG.nodenv === NODE_ENV.PRODUCTION
};

export default registerAs('database', () => {
  const validatonSchema = Joi.object({
    host: Joi.string().required(),
    port: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    database: Joi.string().required()
  }).unknown(true);

  return JoiValidation(validatonSchema, DATABASE_CONFIG);
});

export const connectionSource = new DataSource(DATABASE_CONFIG as DataSourceOptions);
