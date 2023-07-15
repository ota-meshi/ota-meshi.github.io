module.exports = {
  root: true,
  extends: [
    "plugin:@ota-meshi/recommended",
    "plugin:@ota-meshi/+node",
    // "plugin:@ota-meshi/+typescript",
    "plugin:@ota-meshi/+vue2",
    "plugin:vue-scoped-css/recommended",
    "plugin:@ota-meshi/+json",
    "plugin:@ota-meshi/+yaml",
    "plugin:@ota-meshi/+prettier",
  ],
  parserOptions: {
    // Only ESLint 6.2.0 and later support ES2020.
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error", {}],
    "n/no-unsupported-features/es-syntax": "off",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "none", ignoreRestSiblings: true },
    ],
    "vue/html-closing-bracket-newline": "off",
    "require-jsdoc": "off",
    "jsonc/indent": "off",
  },
}
