module.exports = {
  moduleNameMapper: {
    '.+\\.(scss|svg)(\\?inline)?$': 'jest-transform-stub',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.+\\.(scss|svg)(\\?inline)?$': 'jest-transform-stub',
  },
  collectCoverage: true,
  verbose: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/hooks/**/*.hook.ts',
  ],
  testEnvironment: 'jsdom',
}
