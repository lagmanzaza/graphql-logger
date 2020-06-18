module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    // "parser": "@typescript-eslint/parser", // the typescript-parser for eslint, instead of tslint
    sourceType: "module", // allow the use of imports statements
    ecmaVersion: 2018, // allow the parsing of modern ecmascript
  },
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
  },
};
