import { NODE_ENV } from '../constant/application.constant';

const getEnvPath = () => `.env${process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''}`;
const enviroment = process.env.NODE_ENV || NODE_ENV.DEVELOPMENT;

export { getEnvPath, enviroment };
