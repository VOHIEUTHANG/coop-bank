import { NODE_ENV } from 'src/constant/applicatoin.constant';

const getEnvPath = () => `.env${process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''}`;
const enviroment = process.env.NODE_ENV || NODE_ENV.DEVELOPMENT;

export { getEnvPath, enviroment };
