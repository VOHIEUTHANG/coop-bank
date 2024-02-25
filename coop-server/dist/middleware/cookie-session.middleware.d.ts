/// <reference types="qs" />
/// <reference types="express" />
declare const CookieSessionMiddleware: (key: string) => import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export default CookieSessionMiddleware;
