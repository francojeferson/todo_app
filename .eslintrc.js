module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', '_explicacoes/'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'error',
  },
}
