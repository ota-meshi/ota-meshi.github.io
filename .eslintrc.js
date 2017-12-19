module.exports ={
    root:true,
    "plugins": ["prettier"],
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended",
        "plugin:vue/recommended",
        "plugin:vue-scoped-css/recommended",
        "prettier/vue"
    ],
    "parserOptions": {
        // Only ESLint 6.2.0 and later support ES2020.
        "ecmaVersion": 2019,
        sourceType: "module"
    },
    "rules": {
      "prettier/prettier": "error",
      "node/no-unsupported-features/es-syntax": "off",
      "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
      "vue/html-closing-bracket-newline": "off",
      "vue/name-property-casing": ["error", "kebab-case"]
    }
}