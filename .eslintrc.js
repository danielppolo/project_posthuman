const aliases = require('./aliases')

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    document: true,
    window: true,
  },
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react/no-danger': false,
    'import/no-named-as-default-member': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'jsx-quotes': [2, 'prefer-double'],
    'no-restricted-imports': [2, { patterns: ['../*'] }],
    'jsx-a11y/no-autofocus': [0, {
      ignoreNonDOM: true,
    }],
    'no-underscore-dangle': ['error', {
      allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
    }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: aliases,
      },
    },
  },
}
