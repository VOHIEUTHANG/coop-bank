import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { getEnvPath } from '../helper/enviroment.helper';
import Joi from 'joi';
import JoiValidation from '../helper/joi-validation';
import { ApplicationConfig } from './application';
import { NodeEnv } from '../constant';

dotenvConfig({ path: getEnvPath() });

const DatabaseConfig = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: [NodeEnv.DEVELOPMENT, NodeEnv.TEST].includes(ApplicationConfig.nodenv),
  migrationsRun: ApplicationConfig.nodenv === NodeEnv.PRODUCTION,
  ssl: {
    rejectUnauthorized: false
  }
};

export default registerAs('database', () => {
  const validatonSchema = Joi.object({
    host: Joi.string().required(),
    port: Joi.number().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    database: Joi.string().required()
  }).unknown(true);

  return JoiValidation(validatonSchema, DatabaseConfig);
});

export const connectionSource = new DataSource(DatabaseConfig as DataSourceOptions);
