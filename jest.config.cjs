module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
  coverageReporters: ["text", "cobertura"],
};
