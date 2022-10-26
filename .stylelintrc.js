module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-prettier/recommended',
  ],
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  rules: {
    'string-quotes': ['single'],
    'function-no-unknown': [null],
    'font-family-name-quotes': [null],
    'value-keyword-case': [null],
    'rule-empty-line-before': [null],
    'color-function-notation': [null],
    'declaration-empty-line-before': [null],
    'length-zero-no-unit': [null],
    'selector-pseudo-element-colon-notation': [null],
    'annotation-no-unknown': [null],
  },
}
