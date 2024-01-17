const joi = require("joi");

const envVarsSchema = joi
  .object()
  .keys({
    REACT_APP_NODE_ENV: joi.string().valid("production", "development", "test").required(),
    REACT_APP_PORT: joi.number().integer().required(),
    REACT_APP_APP_NAME: joi.string().required(),
    REACT_APP_SERVER_BASE_URL: joi.string().required(),
    REACT_APP_STORAGE_KEY: joi.string().required()
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Env validation error: ${error.message}`);
}

export default {
  ENV: envVars.NODE_ENV,
  PORT: envVars.REACT_APP_PORT,
  APP_NAME: envVars.REACT_APP_APP_NAME,
  BASE_URL: envVars.REACT_APP_SERVER_BASE_URL,
  STORAGE_KEY: envVars.REACT_APP_STORAGE_KEY
};
