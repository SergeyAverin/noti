import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePaths: ["src"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^@atoms(.*)$": "<rootDir>/src/components/atoms$1",
    "^@molecules(.*)$": "<rootDir>/src/components/molecules$1",
    "^@organisms(.*)$": "<rootDir>/src/components/organisms$1",
    "^@templates(.*)$": "<rootDir>/src/components/templates$1",
    "^@pages(.*)$": "<rootDir>/src/components/pages$1",

    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@hocs(.*)$": "<rootDir>/src/hocs$1",
    "^@public(.*)$": "<rootDir>/public$1",
  },

  transform: {
    "^.+\\.svg$": "jest-transformer-svg",
  },
};

export default config;
