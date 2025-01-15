module.exports = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!(rivet\-icons|rivet\-stickers)/)",
  ],
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
  coverageReporters: ["text", "cobertura"],
};
