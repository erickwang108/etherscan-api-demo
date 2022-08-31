module.exports = {
  testEnvironment: 'node',
  coverageDirectory: "./coverage",
  collectCoverageFrom: [
    "src/**/*.{js,ts}",
    "!src/index.{js,ts}"
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    }
  },
  modulePaths: ['.'],
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s"],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'ts'],
};
