module.exports = {
  root: true,
  ignorePatterns: ['dist/', 'target/', 'd.ts/', '*.d.ts'],
  extends: [
    '@proc7ts',
  ],
  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true,
      },
    },
    {
      files: ['*.ts'],
      extends: [
        '@proc7ts/eslint-config/typescript',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.spec.ts'],
      extends: [
        '@proc7ts/eslint-config/jest',
      ],
      parserOptions: {
        project: './tsconfig.spec.json',
      },
    },
  ],
};
