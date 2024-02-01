import { NodeEnv } from '../constant';

const getEnvPath = () => `.env${process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''}`;
const enviroment = process.env.NODE_ENV || NodeEnv.DEVELOPMENT;

export { getEnvPath, enviroment };
