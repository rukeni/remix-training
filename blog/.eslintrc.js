/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
  ],
  settings: {
    jest: {
      version: 27,
    },
  },
  plugins: [
    "prettier",
    "simple-import-sort",
    "sort-destructure-keys",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  rules: {
    "jsx-a11y/alt-text": ["error", { img: ["Image"] }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["invalidHref", "preferButton"],
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
      },
    ],
    "jsx-a11y/img-redundant-alt": ["error", { components: ["Image"] }],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function"],
        unnamedComponents: ["arrow-function"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      "error",
      { callbacksLast: true, reservedFirst: true, shorthandLast: true },
    ],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "sort-keys-fix/sort-keys-fix": "warn",
    "tailwindcss/classnames-order": ["error", { officialSorting: true }],
    "trim/class-name": "warn",
    "typescript-sort-keys/interface": "warn",
  },
  parserOptions: { project: "tsconfig.json" },
};
