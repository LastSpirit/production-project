/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from "path";

export default {
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: "jest",
  },
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  modulePaths: ["<rootDir>src/"],
  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
  },
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "<rootDir>/reports/unit",
        filename: "report.html",
        // openReport: true,
        inlineSource: true,
      },
    ],
  ],
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
};
