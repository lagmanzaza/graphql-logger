module.exports = {
  // rootDir: "tests",
  testMatch: ["**/__test__/**/*.test.ts"],
  // preset: "@babel/preset-env",
  testEnvironment: "node",
  // setupFiles: ["<rootDir>/src/tests/setup-dotenv.ts"],
  verbose: false,
  clearMocks: true,
  resetModules: true,
  testTimeout: 60000,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__fixtures__/",
    "/__tests__/",
    "/(__)?mock(s__)?/",
    "/__jest__/",
    ".?.min.js"
  ],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["js", "jsx", "json", "ts"],
  modulePathIgnorePatterns: [],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: true
    }
  }
};
