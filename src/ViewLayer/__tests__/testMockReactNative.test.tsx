import React from 'react'
import { render } from '@testing-library/react-native'

import { MockReactNative } from '../__mocks__/MockReactNative'

/**
 * @descriptioon TODO: to make the test work. The test does not work.
 *               It needs to find a solution for jest.config.ts and in particular for the properties, that they can accept:
 *                  preset: 'react-native',
 *                  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
 * @test yarn jest testMockComponent.test
 */
describe('Test MockComponent', () => {
  it('test', () => {
    const { getByTestId } = render(<MockReactNative />)

    const element = getByTestId('myText')
    expect(element).toBeTruthy()
    expect(element.children.toString()).toBe('Hello, World!')
  })
})
