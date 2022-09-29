module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  goals: {
    Automics: "raedonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["react"],
  rules: {},
  parser: "@typescripts-eslint/parser",
};
