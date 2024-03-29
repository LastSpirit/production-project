module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:i18next/recommended",
    "airbnb",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "prettier",
    "spichka-fsd-plugin",
  ],
  rules: {
    // indent: [2, 2],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/no-array-index-key": "off",
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: ["role", "data-testid", "to", "target"],
      },
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-param-reassign": "off",
    "spichka-fsd-plugin/path-checker": ["error", { alias: "@" }],
    "spichka-fsd-plugin/layer-imports": [
      "error",
      { alias: "@", ignoreImportPatterns: ["**/StoreProvider", "**/testing"] },
    ],
    "spichka-fsd-plugin/public-api-imports": [
      "error",
      {
        alias: "@",
        testFilesPatterns: [
          "**/*.test.*",
          "**/*.story.*",
          "**/StoreDecorator.tsx",
        ],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PRJECT__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts, tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
      },
    },
  ],
};
