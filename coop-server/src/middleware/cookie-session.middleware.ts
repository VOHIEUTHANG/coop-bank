import cookieSession from 'cookie-session';

const CookieSessionMiddleware = cookieSession({
  keys: ['coop-session-key']
});

export default CookieSessionMiddleware;
