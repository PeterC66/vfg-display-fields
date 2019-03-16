module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "max-len": [
      "error",
      {
        "ignoreComments": true
      }
    ],
    'linebreak-style': ["error", "windows"]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
