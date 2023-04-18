import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest', // ['react-native'] A preset that is used as a base for Jest's configuration
    // setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'], // A list of paths to modules that run some code to configure or set up the testing framework before each test
    transformIgnorePatterns: [
      // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
      'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@unimodules)',
    ],
    moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' }, // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // An array of file extensions your modules use
    transform: { '\\.(ts|tsx)$': 'ts-jest' }, // A map from regular expressions to paths to transformers
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
    testEnvironment: 'node', // ['node'] The test environment that will be used for testing
    clearMocks: true, // Automatically clear mock calls, instances, contexts and results before every test
    collectCoverage: false, // [true] Indicates whether the coverage information should be collected while executing the test
    coverageDirectory: 'coverage', // The directory where Jest should output its coverage files
    // collectCoverage: true,
    // collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  }
}
