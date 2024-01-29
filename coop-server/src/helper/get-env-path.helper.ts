const getEnvPath = () => `.env${process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''}`;
export default getEnvPath;
