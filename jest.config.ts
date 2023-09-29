/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    setupFilesAfterEnv: ['./jestSetup.ts'],
    preset: '@testing-library/react-native',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|ts?|tsx?)$',
    testPathIgnorePatterns: [
      '<rootDir>/scripts/test.js',
      'node_modules/(?!' +
        [
          '@react-native',
          'react-native',
          'react-native-vector-icons',
          'react-native-vector-icons/FontAwesome',
          'react-native-vector-icons/Ionicons',
        ].join('|') +
        ')',
    ],
    clearMocks: true,
  }
}

/**
 * @description Js file format configuration
 */
// module.exports = {
//   setupFilesAfterEnv: ['./jestSetup.ts'],
//   preset: '@testing-library/react-native',
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|ts?|tsx?)$',
//   testPathIgnorePatterns: ['<rootDir>/scripts/test.js'], // To prevent error RUNS scripts/test.js error Command failed with exit code 1. info Visit https://yarnpkg.com/en/docs/
//   clearMocks: true,
// }
