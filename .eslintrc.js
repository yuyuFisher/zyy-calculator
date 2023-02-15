module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react', 'simple-import-sort',
  ],
  rules: {
    'no-undef': 0,
    'import/no-extraneous-dependencies': 0,
    'react/require-default-props': 0,
    'react/no-unstable-nested-components': 0,
    'react/jsx-no-bind': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-return-assign': 0,
    'react/jsx-filename-extension': 0,
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
  },
};
