import cookieSession from 'cookie-session';

const CookieSessionMiddleware = (key: string) =>
  cookieSession({
    keys: [key]
  });

export default CookieSessionMiddleware;
