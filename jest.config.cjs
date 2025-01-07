module.exports = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!(rivet\-icons)/)"],
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
  coverageReporters: ["text", "cobertura"],
};
