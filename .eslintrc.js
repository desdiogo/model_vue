const { resolve } = require('path');

module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    extraFileExtensions: ['.vue'],
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    '@vue/typescript/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:jest/recommended',
    'airbnb-base',
  ],
  rules: {
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',

    'import/first': 'off',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',

    // TypeScript
    quotes: ['warn', 'single', { avoidEscape: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
}
