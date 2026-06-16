module.exports = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!(rivet\-icons|rivet\-stickers)/)",
  ],
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
  coverageReporters: ["text", "cobertura"],
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    uuid: require.resolve("uuid"),
  },
};
