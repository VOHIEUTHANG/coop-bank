module.exports = {
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  overrides: [
    {
      env: {
        browser: true,
        es2021: true,
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      },
      {
        usePrettierrc: true
      }
    ]
  }
};
