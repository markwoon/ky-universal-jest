// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const esModules = ['ky', 'ky-universal'].join('|');

module.exports = {
  testEnvironment: 'jsdom',

  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
