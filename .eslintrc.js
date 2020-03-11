module.exports = {
  extends: ['@lunit', 'prettier', 'prettier/react', 'prettier/@typescript-eslint'],
  ignorePatterns: ['src/**/public/*', 'src/**/*.d.ts'],
  rules: {
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: true,
        objectDestructuring: false,
        parameter: true,
        propertyDeclaration: true,
        memberVariableDeclaration: true,
        variableDeclaration: true,
      },
    ],
  },
};
