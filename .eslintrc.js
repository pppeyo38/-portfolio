module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'google',
    'prettier',
    'plugin:storybook/recommended',
  ],
  rules: {
    'require-jsdoc': ['off'],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    '@next/next/no-img-element': ['off'],
    'no-unused-vars': ['off'],
    'react/display-name': ['off'],
  },
}
